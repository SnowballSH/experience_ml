use js_sys;
use wasm_bindgen::prelude::*;

use crate::activations::{derivative_sigmoid, sigmoid};
use crate::utils::ArrayOfArrayBuilder;

#[derive(Clone, Debug)]
pub struct DynamicDenseLayer {
    pub input_size: usize,
    pub output_size: usize,
    pub weights: Vec<Vec<f32>>,
    pub biases: Vec<f32>,
    pub activation: fn(f32) -> f32,
    pub derivative_activation: fn(f32) -> f32,

    pub inputs: Vec<f32>,
    pub weighted_inputs: Vec<f32>,
    pub outputs: Vec<f32>,
    pub cost_gradient_weight: Vec<Vec<f32>>,
    pub cost_gradient_bias: Vec<f32>,
}

impl DynamicDenseLayer {
    pub fn new(input_size: usize, output_size: usize) -> Self {
        DynamicDenseLayer {
            input_size,
            output_size,
            weights: vec![vec![0.0; output_size]; input_size],
            biases: vec![0.0; output_size],
            activation: sigmoid,
            derivative_activation: derivative_sigmoid,

            inputs: vec![0.0; input_size],
            weighted_inputs: vec![0.0; output_size],
            outputs: vec![0.0; output_size],
            cost_gradient_weight: vec![vec![0.0; output_size]; input_size],
            cost_gradient_bias: vec![0.0; output_size],
        }
    }

    pub fn randomize(&mut self) {
        for i in 0..self.input_size {
            for j in 0..self.output_size {
                self.weights[i][j] = (js_sys::Math::random() as f32 * 2.0 - 1.0) / (self.input_size as f32).sqrt();
            }
        }
        for j in 0..self.output_size {
            self.biases[j] = (js_sys::Math::random() as f32 * 2.0 - 1.0) / (self.output_size as f32).sqrt();
        }
    }

    pub fn forward(&mut self, input: &[f32]) -> &Vec<f32> {
        self.inputs = input.to_vec();

        for out_node in 0..self.output_size {
            let mut acc = self.biases[out_node];
            for (in_node, val) in input.iter().enumerate() {
                acc += val * self.weights[in_node][out_node];
            }
            self.weighted_inputs[out_node] = acc;
            self.outputs[out_node] = (self.activation)(acc);
        }

        &self.outputs
    }

    pub fn output_node_values(&self, expected_output: &[f32]) -> Vec<f32> {
        let mut node_values = vec![0.0; self.output_size];

        for out_node in 0..self.output_size {
            let cost = DynamicNetwork::derivative_mse_node(self.outputs[out_node], expected_output[out_node]);
            let activation = (self.derivative_activation)(self.weighted_inputs[out_node]);
            node_values[out_node] = activation * cost;
        }

        node_values
    }

    pub fn hidden_node_values(&self, next_layer: &DynamicDenseLayer, next_node_values: &[f32]) -> Vec<f32> {
        let mut node_values = vec![0.0; self.output_size];

        for (out_node, wi) in self.weighted_inputs.iter().enumerate() {
            let mut acc = 0.0;
            for (next_node, val) in next_node_values.iter().enumerate() {
                acc += next_layer.weights[out_node][next_node] * val
            }
            node_values[out_node] = (self.derivative_activation)(*wi) * acc;
        }

        node_values
    }

    pub fn update_gradients(&mut self, node_values: &[f32]) {
        for (out_node, node_val) in node_values.iter().enumerate() {
            for (in_node, i_val) in self.inputs.iter().enumerate() {
                self.cost_gradient_weight[in_node][out_node] += i_val * node_val;
            }

            self.cost_gradient_bias[out_node] += node_val;
        }
    }

    pub fn apply_gradients(&mut self, learning_rate: f32) {
        for our_node in 0..self.output_size {
            self.biases[our_node] -= learning_rate * self.cost_gradient_bias[our_node];
            for in_node in 0..self.input_size {
                self.weights[in_node][our_node] -= learning_rate * self.cost_gradient_weight[in_node][our_node];
            }
        }
    }

    pub fn reset_gradients(&mut self) {
        for i in 0..self.input_size {
            for j in 0..self.output_size {
                self.cost_gradient_weight[i][j] = 0.0;
            }
        }
        for j in 0..self.output_size {
            self.cost_gradient_bias[j] = 0.0;
        }
    }
}

#[wasm_bindgen]
#[derive(Clone, Debug)]
pub struct DynamicNetwork {
    pub num_layers: usize,
    layers: Vec<DynamicDenseLayer>,
}

impl DynamicNetwork {
    pub fn new(neurons: Vec<usize>) -> Self {
        let num_layers = neurons.len();
        let mut layers = Vec::with_capacity(num_layers - 1);

        for i in 0..num_layers - 1 {
            layers.push(DynamicDenseLayer::new(neurons[i], neurons[i + 1]));
        }

        DynamicNetwork {
            num_layers,
            layers,
        }
    }

    pub fn randomize(&mut self) {
        for layer in &mut self.layers {
            layer.randomize();
        }
    }

    pub fn forward<'a>(&'a mut self, input: &'a Vec<f32>) -> &Vec<f32> {
        let mut res = input;

        for layer in &mut self.layers {
            res = layer.forward(res);
        }

        res
    }

    pub fn mse_node(output: f32, expected_output: f32) -> f32 {
        (expected_output - output).powi(2)
    }

    pub fn derivative_mse_node(output: f32, expected_output: f32) -> f32 {
        2.0 * (output - expected_output)
    }

    pub fn mse(&mut self, input: &Vec<f32>, expected_output: &[f32]) -> f32 {
        let output = self.forward(input);
        let mut res = 0.0;

        for i in 0..output.len() {
            res += Self::mse_node(output[i], expected_output[i]);
        }

        res / output.len() as f32
    }

    pub fn update_all_gradients(&mut self, input: &Vec<f32>, expected_output: &[f32]) {
        self.forward(input);

        let output_layer = self.layers.last_mut().unwrap();
        let mut node_values = output_layer.output_node_values(expected_output);

        output_layer.update_gradients(&node_values);

        for i in (0..=self.layers.len() - 2).rev() {
            let layer = &self.layers[i];
            node_values = layer.hidden_node_values(&self.layers[i + 1], &node_values);
            self.layers[i].update_gradients(&node_values);
        }
    }

    pub fn reset_all_gradients(&mut self) {
        for layer in &mut self.layers {
            layer.reset_gradients();
        }
    }

    #[inline]
    pub fn learn_one(&mut self, inputs: &Vec<f32>, expected_outputs: &[f32]) {
        self.update_all_gradients(inputs, expected_outputs);
    }

    pub fn learn_batch(&mut self, inputs: &[Vec<f32>], expected_outputs: &[Vec<f32>], learning_rate: f32) {
        for (input, expected_output) in inputs.iter().zip(expected_outputs.iter()) {
            self.learn_one(input, expected_output);
        }

        for layer in &mut self.layers {
            layer.apply_gradients(learning_rate);
        }

        self.reset_all_gradients();
    }
}

#[wasm_bindgen]
impl DynamicNetwork {
    pub fn new_from_js(neurons: &[usize]) -> DynamicNetwork {
        DynamicNetwork::new(Vec::from(neurons))
    }

    pub fn randomize_from_js(&mut self) {
        self.randomize();
    }

    pub fn forward_from_js(&mut self, input: &[f32]) -> Vec<f32> {
        self.forward(&Vec::from(input)).clone()
    }

    pub fn mse_from_js(&mut self, input: &[f32], expected_output: &[f32]) -> f32 {
        self.mse(&Vec::from(input), &Vec::from(expected_output))
    }

    pub fn learn_from_js(&mut self, inputs: &ArrayOfArrayBuilder, expected_outputs: &ArrayOfArrayBuilder, learning_rate: f32) {
        let inputs_vec = inputs.get();
        let expected_outputs_vec = expected_outputs.get();

        self.learn_batch(inputs_vec, expected_outputs_vec, learning_rate);
    }
}
