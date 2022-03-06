const { isEmpty, notEmpty } = require("..");

//? Listing of test scenarios
//* input >> Value that will get passed into the function
//* expected >> Expected output of the function [true/false]
//! isEmpty(val) == expected || notEmpty(val) == !expected

const testItems = [

  //! EMPTY VALUES [undefined/null/''/NaN]
  //? empty string "" : isEmpty >> true
  {
    input: "",
    expect: true,
  },

  //? empty string '' : isEmpty >> true
  {
    input: '',
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

  //? NaN : isEmpty >> true
  {
    input: NaN,
    expect: true,
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

  //? Empty arrau : isEmpty >> true
  {
    input: [],
    expect: true,
  },

  //? Not  empty array : isEmpty >> false
  {
    input: [ "123", "456" ],
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

  //? -.89919 : isEmpty >> false
  {
    input: -.89919,
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
];

testItems.forEach( async (item) => {

  test(String(item.input)+" :: isEmpty >> "+item.expect, async () => {
    expect(await isEmpty(item.input)).toBe(item.expect);
  });

  test(String(item.input)+" :: notEmpty >> "+!item.expect, async () => {
    expect(await notEmpty(item.input)).toBe(!item.expect);
  });

});
