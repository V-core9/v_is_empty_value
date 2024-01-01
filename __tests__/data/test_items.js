//? Listing of test scenarios
//* input >> Value that will get passed into the function
//* expected >> Expected output of the function [true/false]
//! isEmpty(val) == expected || isNotEmpty(val) == !expected

module.exports = [
  //! EMPTY VALUES [undefined/null/''/NaN]
  //? empty string '' : isEmpty >> true
  {
    uid: 'TI:001',
    input: '',
    expect: true,
    nestExpect: true
  },

  //? null : isEmpty >> true
  {
    uid: 'TI:002',
    input: null,
    expect: true,
    nestExpect: true
  },
  //? undefined : isEmpty >> true
  {
    uid: 'TI:003',
    input: undefined,
    expect: true,
    nestExpect: true
  },

  //? NaN : isEmpty >> false
  {
    uid: 'TI:004',
    input: NaN,
    expect: false,
    nestExpect: false
  },

  //? isNaN : isEmpty >> false
  {
    uid: 'TI:005',
    input: isNaN,
    expect: false,
    nestExpect: false
  },

  //! OBJECTS
  //? Empty Object : isEmpty >> true
  {
    uid: 'TI:006',
    input: {},
    expect: true,
    nestExpect: true
  },

  //? Not Empty Object : isEmpty >> false
  {
    uid: 'TI:007',
    input: {
      name: '123'
    },
    expect: false,
    nestExpect: false
  },

  //? Empty array : isEmpty >> true
  {
    uid: 'TI:008',
    input: [],
    expect: true,
    nestExpect: true
  },

  //? Not  empty array : isEmpty >> false
  {
    uid: 'TI:009',
    input: ['123', '456'],
    expect: false,
    nestExpect: false
  },

  //! STRING
  //? "demo_password_123456" : isEmpty >> false
  {
    uid: 'TI:010',
    input: 'demo_password_123456',
    expect: false,
    nestExpect: false
  },

  //? "15987w@#$%#@^" : isEmpty >> false
  {
    uid: 'TI:011',
    input: '15987w@#$%#@^',
    expect: false,
    nestExpect: false
  },

  //? "demo_pasW$@#$3456" : isEmpty >> false
  {
    uid: 'TI:012',
    input: 'demo_pasW$@#$3456',
    expect: false,
    nestExpect: false
  },

  //? undefined : isEmpty >> true
  {
    uid: 'TI:013',
    input: undefined,
    expect: true,
    nestExpect: true
  },

  //! NUMBER
  //? 35373473452341 : isEmpty >> false
  {
    uid: 'TI:023',
    input: 35373473452341,
    expect: false,
    nestExpect: false
  },

  //? -89919 : isEmpty >> false
  {
    uid: 'TI:024',
    input: -89919,
    expect: false,
    nestExpect: false
  },

  //? 0 : isEmpty >> false
  {
    uid: 'TI:025',
    input: 0,
    expect: false,
    nestExpect: false
  },

  //? -.89919 : isEmpty >> false
  {
    uid: 'TI:026',
    input: -0.89919,
    expect: false,
    nestExpect: false
  },

  //? 11.11 : isEmpty >> false
  {
    uid: 'TI:027',
    input: 11.11,
    expect: false,
    nestExpect: false
  },

  //! DATES
  //? Not  empty array : isEmpty >> false
  {
    uid: 'TI:028',
    input: Date.now(),
    expect: false,
    nestExpect: false
  },

  //? Not  empty array : isEmpty >> false
  {
    uid: 'TI:029',
    input: new Date(),
    expect: false,
    nestExpect: false
  },

  //! BOOLEANS
  //? true : isEmpty >> false
  {
    uid: 'TI:030',
    input: true,
    expect: false,
    nestExpect: false
  },

  //? false : isEmpty >> false
  {
    uid: 'TI:031',
    input: false,
    expect: false,
    nestExpect: false
  },

  //! Random Custom Things
  //? Error - Should detect it as something else than empty
  {
    uid: 'TI:032',
    input: new Error(),
    expect: false,
    nestExpect: false
  },

  //? Promise - Should not return empty
  {
    uid: 'TI:033',
    input: new Promise((resolve, reject) => resolve(true)),
    expect: false,
    nestExpect: false
  },

  //? Nested OBJECT : isEmpty >> false [even though it's empty]
  {
    uid: 'TI:034',
    input: {
      demo: null,
      yea: undefined,
      iKnowMan: {
        wtf: null,
        moreNull: NaN
      }
    },
    expect: false,
    nestExpect: false
  },

  //? Nested ARRAY : isEmpty >> false [even though it's empty]
  {
    uid: 'TI:035',
    input: [
      null,
      undefined,
      {
        wtf: null,
        moreNull: ''
      }
    ],
    expect: false,
    nestExpect: true
  },

  //? Nested ARRAY : isEmpty >> false [even though it's empty]
  {
    uid: 'TI:036',
    input: [
      null,
      undefined,
      {
        wtf: null,
        moreNull: '',
        input: [
          null,
          undefined,
          {
            wtf: null,
            moreNull: '',
            input: [
              null,
              undefined,
              {
                wtf: null,
                moreNull: ''
              }
            ]
          }
        ]
      }
    ],
    expect: false,
    nestExpect: true
  }
]
