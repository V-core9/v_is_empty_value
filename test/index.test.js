const { v_is_empty_value, v0 } = require("../source/v_is_empty_value");

test("Checks v_is_empty_value for string [ demo_password_123456 ]", () => {
  expect(v_is_empty_value("demo_password_123456")).toBe(false);
});

test("Checks v_is_empty_value for string [ demo_123456 ]", () => {
  expect(v_is_empty_value("demo_123456")).toBe(false);
});

test("Checks v_is_empty_value for string [ 15987w@#$%#@^ ]", () => {
  expect(v_is_empty_value("15987w@#$%#@^")).toBe(false);
});

test("Checks v_is_empty_value for string [ demo_pasW$@#$3456 ]", () => {
  expect(v_is_empty_value("demo_pasW$@#$3456")).toBe(false);
});

test("Checks v_is_empty_value for string [ v0() ]", () => {
  expect(v_is_empty_value(v0)).toBe(false);
});

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

test("Checks v0 for string [ demo_password_123456 ]", () => {
  expect(v0("demo_password_123456")).toBe(false);
});

test("Checks v0 for string [ demo_123456 ]", () => {
  expect(v0("demo_123456")).toBe(false);
});

test("Checks v0 for string [ 15987w@#$%#@^ ]", () => {
  expect(v0("15987w@#$%#@^")).toBe(false);
});

test("Checks v0 for string [ demo_pasW$@#$3456 ]", () => {
  expect(v0("demo_pasW$@#$3456")).toBe(false);
});

test("Checks v0 for string [ v_is_empty_value() ]", () => {
  expect(v0(v_is_empty_value)).toBe(false);
});

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

test("Checks v_is_empty_value for weird empty values [ '' ]", () => {
  expect(v_is_empty_value("")).toBe(true);
});

test("Checks v_is_empty_value for weird empty values [  ]", () => {
  expect(v_is_empty_value()).toBe(true);
});

test("Checks v_is_empty_value for weird empty values [ null ]", () => {
  expect(v_is_empty_value(null)).toBe(true);
});

test("Checks v_is_empty_value for weird empty values [ undefined ]", () => {
  expect(v_is_empty_value(undefined)).toBe(true);
});

test("Checks v_is_empty_value for weird empty values [ NaN ]", () => {
  expect(v_is_empty_value(NaN)).toBe(true);
});

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

test("Checks v0 for weird empty values [ '' ]", () => {
  expect(v0("")).toBe(true);
});

test("Checks v0 for weird empty values [  ]", () => {
  expect(v0()).toBe(true);
});

test("Checks v0 for weird empty values [ null ]", () => {
  expect(v0(null)).toBe(true);
});

test("Checks v0 for weird empty values [ undefined ]", () => {
  expect(v0(undefined)).toBe(true);
});

test("Checks v0 for weird empty values [ NaN ]", () => {
  expect(v0(NaN)).toBe(true);
});

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

test("Checks v_is_empty_value for number [ 35373473452341() ]", () => {
  expect(v_is_empty_value(35373473452341)).toBe(false);
});

test("Checks v_is_empty_value for number [ -89919 ]", () => {
  expect(v_is_empty_value(-89919)).toBe(false);
});

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

test("Checks v0 for number [ 35373473452341() ]", () => {
  expect(v0(35373473452341)).toBe(false);
});

test("Checks v0 for number [ -89919 ]", () => {
  expect(v0(-89919)).toBe(false);
});
