use wasm_bindgen::prelude::*;

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub struct ArrayOfArrayBuilder {
    array: Vec<Vec<f32>>,
}

impl ArrayOfArrayBuilder {
    pub fn get(&self) -> &Vec<Vec<f32>> {
        &self.array
    }
}

#[wasm_bindgen]
impl ArrayOfArrayBuilder {
    pub fn new() -> Self {
        ArrayOfArrayBuilder {
            array: Vec::new(),
        }
    }

    pub fn push(&mut self, array: &[f32]) {
        self.array.push(array.to_vec());
    }
}
