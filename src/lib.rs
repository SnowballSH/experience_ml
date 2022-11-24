mod utils;

use wasm_bindgen::prelude::*;
use crate::utils::set_panic_hook;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn init() {
    set_panic_hook();
}

#[wasm_bindgen]
pub fn next(num: i32) -> i32 {
    if num & 1 == 0 {
        num / 2
    } else {
        num * 3 + 1
    }
}
