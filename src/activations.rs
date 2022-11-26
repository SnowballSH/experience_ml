use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn relu(x: f32) -> f32 {
    x.max(0.0)
}

#[wasm_bindgen]
pub fn sigmoid(x: f32) -> f32 {
    1.0 / (1.0 + (-x).exp())
}
