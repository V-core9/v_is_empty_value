//? Listing of test scenarios
//* input >> Value that will get passed into the function
//* expected >> Expected output of the function [true/false]
//! isEmpty(val) == expected || notEmpty(val) == !expected

module.exports = [
  //! EMPTY VALUES [undefined/null/''/NaN]
  //? empty string "" : isEmpty >> true
  {
    input: "",
    expect: true,
  },

  //? empty string '' : isEmpty >> true
  {
    input: "",
    expect: true,
  },

  //? null : isEmpty >> true
  {
    input: null,
    expect: true,
  },

  //? undefined : isEmpty >> true
  {
    input: undefined,
    expect: true,
  },

  //? NaN : isEmpty >> false
  {
    input: NaN,
    expect: false,
  },

  //? isNaN : isEmpty >> false
  {
    input: isNaN,
    expect: false,
  },

  //! OBJECTS
  //? Empty Object : isEmpty >> true
  {
    input: {},
    expect: true,
  },

  //? Not Empty Object : isEmpty >> false
  {
    input: {
      name: "123",
    },
    expect: false,
  },

  //? Empty array : isEmpty >> true
  {
    input: [],
    expect: true,
  },

  //? Not  empty array : isEmpty >> false
  {
    input: ["123", "456"],
    expect: false,
  },

  //! STRING
  //? "demo_password_123456" : isEmpty >> false
  {
    input: "demo_password_123456",
    expect: false,
  },

  //? "15987w@#$%#@^" : isEmpty >> false
  {
    input: "15987w@#$%#@^",
    expect: false,
  },

  //? "demo_pasW$@#$3456" : isEmpty >> false
  {
    input: "demo_pasW$@#$3456",
    expect: false,
  },

  //! NUMBER
  //? 35373473452341 : isEmpty >> false
  {
    input: 35373473452341,
    expect: false,
  },

  //? -89919 : isEmpty >> false
  {
    input: -89919,
    expect: false,
  },

  //? 0 : isEmpty >> false
  {
    input: 0,
    expect: false,
  },

  //? -.89919 : isEmpty >> false
  {
    input: -0.89919,
    expect: false,
  },

  //? 11.11 : isEmpty >> false
  {
    input: 11.11,
    expect: false,
  },

  //! DATES
  //? Not  empty array : isEmpty >> false
  {
    input: Date.now(),
    expect: false,
  },

  //? Not  empty array : isEmpty >> false
  {
    input: new Date(),
    expect: false,
  },

  //! BOOLEANS
  //? true : isEmpty >> false
  {
    input: true,
    expect: false,
  },

  //? false : isEmpty >> false
  {
    input: false,
    expect: false,
  },

  //! Random Custom Things
  //? Error - Should detect it as something else than empty
  {
    input: new Error(),
    expect: false,
  },

  //? Promise - Should not return empty
  {
    input: new Promise((resolve, reject) => resolve(true)),
    expect: false,
  },
];
