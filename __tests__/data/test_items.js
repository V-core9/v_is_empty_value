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

  //? NaN : isEmpty >> true (NaN is considered empty by default)
  {
    uid: 'TI:004',
    input: NaN,
    expect: true,
    nestExpect: true
  },

  //? isNaN function : isEmpty >> true (function treated as empty by default)
  {
    uid: 'TI:005',
    input: isNaN,
    expect: true,
    nestExpect: true
  },

  //? Symbol : isEmpty >> true (symbol treated as empty by default)
  {
    uid: 'TI:005a',
    input: Symbol('test'),
    expect: true,
    nestExpect: true
  },

  //? BigInt(0) : isEmpty >> false (zero BigInt is not empty by default)
  {
    uid: 'TI:005b',
    input: BigInt(0),
    expect: false,
    nestExpect: false
  },

  //? BigInt(1) : isEmpty >> false
  {
    uid: 'TI:005c',
    input: BigInt(1),
    expect: false,
    nestExpect: false
  },

  //? Function : isEmpty >> true (function treated as empty by default)
  {
    uid: 'TI:005d',
    input: function test() {},
    expect: true,
    nestExpect: true
  },

  //? Arrow Function : isEmpty >> true
  {
    uid: 'TI:005e',
    input: () => 'test',
    expect: true,
    nestExpect: true
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

  //? Infinity : isEmpty >> false
  {
    uid: 'TI:027a',
    input: Infinity,
    expect: false,
    nestExpect: false
  },

  //? -Infinity : isEmpty >> false
  {
    uid: 'TI:027b',
    input: -Infinity,
    expect: false,
    nestExpect: false
  },

  //! DATES
  //? Date.now() timestamp number : isEmpty >> false
  {
    uid: 'TI:028',
    input: Date.now(),
    expect: false,
    nestExpect: false
  },

  //? new Date() object : isEmpty >> false
  {
    uid: 'TI:029',
    input: new Date(),
    expect: false,
    nestExpect: false
  },

  //! MAP AND SET
  //? Empty Map : isEmpty >> true
  {
    uid: 'TI:029a',
    input: new Map(),
    expect: true,
    nestExpect: true
  },

  //? Map with entries : isEmpty >> false
  {
    uid: 'TI:029b',
    input: new Map([['key', 'value']]),
    expect: false,
    nestExpect: false
  },

  //? Empty Set : isEmpty >> true
  {
    uid: 'TI:029c',
    input: new Set(),
    expect: true,
    nestExpect: true
  },

  //? Set with values : isEmpty >> false
  {
    uid: 'TI:029d',
    input: new Set([1, 2, 3]),
    expect: false,
    nestExpect: false
  },

  //? WeakMap (always non-empty, can't check contents) : isEmpty >> false
  {
    uid: 'TI:029e',
    input: new WeakMap(),
    expect: false,
    nestExpect: false
  },

  //? WeakSet (always non-empty, can't check contents) : isEmpty >> false
  {
    uid: 'TI:029f',
    input: new WeakSet(),
    expect: false,
    nestExpect: false
  },

  //! REGEXP
  //? RegExp : isEmpty >> false
  {
    uid: 'TI:029g',
    input: /test/,
    expect: false,
    nestExpect: false
  },

  //? new RegExp() : isEmpty >> false
  {
    uid: 'TI:029h',
    input: new RegExp('test'),
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

  //? Nested OBJECT with only empty values : isEmpty >> false (has keys), isEmptyNested >> true (all values empty)
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
    nestExpect: true
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
