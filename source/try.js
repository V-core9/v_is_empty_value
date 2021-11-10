const { is_empty_value, v0 } = require("./is_empty_value");

console.log(is_empty_value("demo_password_123456"));
console.log(is_empty_value(123));
console.log(is_empty_value(v0));

console.log(is_empty_value(""));
console.log(is_empty_value());
console.log(is_empty_value(null));
console.log(is_empty_value(NaN));
console.log(is_empty_value(undefined));

