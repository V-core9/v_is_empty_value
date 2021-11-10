const is_empty_value = require("../source/is_empty_value");

test("Checks if it's empty value for multiple strings", () => {
  expect(is_empty_value("demo_password_123456")).toBe(false);
  expect(is_empty_value("demo_123456")).toBe(false);
  expect(is_empty_value("15987w@#$%#@^")).toBe(false);
  expect(is_empty_value("demo_passwW$@#$3456")).toBe(false);
});

test("Checks if it's empty value for multiple strings", () => {
  expect(is_empty_value("")).toBe(false);
  expect(is_empty_value()).toBe(false);
  expect(is_empty_value(null)).toBe(false);
  expect(is_empty_value(undefined)).toBe(false);
});


test("Checks if numbers are empty value", () => {
  expect(is_empty_value(11)).toBe(false);
  expect(is_empty_value(19848156)).toBe(false);
  expect(is_empty_value(35373473452341)).toBe(false);
  expect(is_empty_value(-89919)).toBe(false);
});
