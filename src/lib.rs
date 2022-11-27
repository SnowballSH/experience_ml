use wasm_bindgen::prelude::*;

use crate::utils::set_panic_hook;

pub mod utils;
pub mod network;
pub mod activations;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn init() {
    set_panic_hook();
}
