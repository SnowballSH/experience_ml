use js_sys;
use wasm_bindgen::prelude::*;

use crate::activations::{relu, sigmoid};

#[derive(Clone, Debug)]
pub struct DynamicDenseLayer {
    pub input_size: usize,
    pub output_size: usize,
    pub weights: Vec<Vec<f32>>,
    pub biases: Vec<f32>,
    pub activation: fn(f32) -> f32,
}

impl DynamicDenseLayer {
    pub fn new(input_size: usize, output_size: usize) -> Self {
        DynamicDenseLayer {
            input_size,
            output_size,
            weights: vec![vec![0.0; output_size]; input_size],
            biases: vec![0.0; output_size],
            activation: sigmoid,
        }
    }

    pub fn randomize(&mut self) {
        for i in 0..self.input_size {
            for j in 0..self.output_size {
                self.weights[i][j] = js_sys::Math::random() as f32 * 2.0 - 1.0;
            }
        }
        for j in 0..self.output_size {
            self.biases[j] = js_sys::Math::random() as f32 * 2.0 - 1.0;
        }
    }

    pub fn forward(&self, input: &Vec<f32>) -> Vec<f32> {
        let mut res = Vec::with_capacity(self.output_size);

        for out_node in 0..self.output_size {
            let mut acc = self.biases[out_node];
            for in_node in 0..self.input_size {
                acc += input[in_node] * self.weights[in_node][out_node];
            }
            res.push((self.activation)(acc));
        }

        res
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

    pub fn forward(&self, input: &Vec<f32>) -> Vec<f32> {
        let mut res = input.clone();

        for layer in &self.layers {
            res = layer.forward(&res);
        }

        res
    }

    pub fn mse(&self, input: &Vec<f32>, expected_output: &Vec<f32>) -> f32 {
        let output = self.forward(input);
        let mut res = 0.0;

        for i in 0..output.len() {
            res += (output[i] - expected_output[i]).powi(2);
        }

        res / output.len() as f32
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

    pub fn forward_from_js(&self, input: &[f32]) -> Vec<f32> {
        self.forward(&Vec::from(input))
    }

    pub fn mse_from_js(&self, input: &[f32], expected_output: &[f32]) -> f32 {
        self.mse(&Vec::from(input), &Vec::from(expected_output))
    }
}
