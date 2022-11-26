pub fn relu(x: f32) -> f32 {
    x.max(0.0)
}

pub fn derivative_relu(x: f32) -> f32 {
    if x > 0.0 {
        1.0
    } else {
        0.0
    }
}

pub fn sigmoid(x: f32) -> f32 {
    1.0 / (1.0 + (-x).exp())
}

pub fn derivative_sigmoid(x: f32) -> f32 {
    let sig = sigmoid(x);
    sig * (1.0 - sig)
}
