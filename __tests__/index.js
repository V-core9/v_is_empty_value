const { isEmpty, notEmpty } = require("..");

//? Listing of test scenarios
//* input >> Value that will get passed into the function
//* expected >> Expected output of the function [true/false]
//! isEmpty(val) == expected || notEmpty(val) == !expected

const testItems = [
  {
    input: "",
    expect: true,
  },
  {
    input: null,
    expect: true,
  },
  {
    input: undefined,
    expect: true,
  },
  {
    input: NaN,
    expect: true,
  },
  {
    input: {},
    expect: true,
  },
  {
    input: [],
    expect: true,
  },
  {
    input: "demo_password_123456",
    expect: false,
  },
  {
    input: "demo_123456",
    expect: false,
  },
  {
    input: "15987w@#$%#@^",
    expect: false,
  },
  {
    input: "demo_pasW$@#$3456",
    expect: false,
  },
  {
    input: 35373473452341,
    expect: false,
  },
  {
    input: -89919,
    expect: false,
  },
  {
    input: Date.now(),
    expect: false,
  },
  {
    input: new Date(),
    expect: false,
  },

];

testItems.forEach( async (item) => {

  test("Is Empty Val >> [ "+String(item.input)+" ]", async () => {
    expect(await isEmpty(item.input)).toBe(item.expect);
  });

  test("Is NOT Empty Val >> [ "+String(item.input)+" ]", async () => {
    expect(await notEmpty(item.input)).toBe(!item.expect);
  });

});
