module.exports = [
  //? Nested OBJECT with only empty values : isEmpty >> false (has keys), isEmptyNested >> true (all values empty including NaN)
  {
    uid: 'NO:001',
    input: {
      demo: null,
      yea: undefined,
      iKnowMan: {
        wtf: null,
        moreNull: NaN
      }
    },
    nestExpect: true,
    expect: false
  },

  //? Nested OBJECT : isEmpty >> false [even though it's empty]
  {
    uid: 'NO:002',
    input: {
      demo: null,
      yea: undefined,
      iKnowMan: {
        wtf: null,
        moreNull: ''
      }
    },
    nestExpect: true,
    expect: false
  },

  //? Nested ARRAY with only empty values : isEmpty >> false (has items), isEmptyNested >> true (all values empty including NaN)
  {
    uid: 'NA:001',
    input: [
      null,
      undefined,
      {
        wtf: null,
        moreNull: NaN
      }
    ],
    expect: false,
    nestExpect: true
  },

  {
    uid: 'NA:002',
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

  {
    uid: 'NA:003',
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
  },

  //? Add your additional tests here
  {
    uid: 'NO:003',
    input: {
      demo: null,
      yea: undefined,
      iKnowMan: {
        wtf: null,
        moreNull: null
      }
    },
    nestExpect: true,
    expect: false
  },

  //? Circular reference test - object referencing itself (should not infinite loop)
  {
    uid: 'CIRC:001',
    input: (() => {
      const obj = { a: null, b: undefined }
      obj.self = obj // Circular reference
      return obj
    })(),
    nestExpect: true,
    expect: false
  },

  //? Circular reference with non-empty data
  {
    uid: 'CIRC:002',
    input: (() => {
      const obj = { a: 'value', b: undefined }
      obj.self = obj // Circular reference
      return obj
    })(),
    nestExpect: false,
    expect: false
  },

  //? Array with circular reference
  {
    uid: 'CIRC:003',
    input: (() => {
      const arr = [null, undefined]
      arr.push(arr) // Circular reference
      return arr
    })(),
    nestExpect: true,
    expect: false
  },

  //? Nested array with all empty values
  {
    uid: 'NA:006',
    input: [[], [null, undefined], [{}, [], '']],
    expect: false,
    nestExpect: true
  },

  //? Map with nested empty values
  {
    uid: 'MAP:001',
    input: new Map([['a', null], ['b', undefined]]),
    expect: false,
    nestExpect: true
  },

  //? Map with nested non-empty value
  {
    uid: 'MAP:002',
    input: new Map([['a', null], ['b', 'value']]),
    expect: false,
    nestExpect: false
  },

  //? Set with all empty values
  {
    uid: 'SET:001',
    input: new Set([null, undefined, '']),
    expect: false,
    nestExpect: true
  },

  //? Set with non-empty value
  {
    uid: 'SET:002',
    input: new Set([null, 'value']),
    expect: false,
    nestExpect: false
  },

  //? Object with NaN value
  {
    uid: 'NAN:001',
    input: { a: NaN, b: null },
    expect: false,
    nestExpect: true
  },

  //? Array with NaN
  {
    uid: 'NAN:002',
    input: [NaN, null],
    expect: false,
    nestExpect: true
  },

  //? Object with Symbol
  {
    uid: 'SYM:001',
    input: { a: Symbol('test') },
    expect: false,
    nestExpect: true
  },

  //? Object with function
  {
    uid: 'FN:001',
    input: { a: () => {}, b: null },
    expect: false,
    nestExpect: true
  },

  //? Deeply nested all empty
  {
    uid: 'DEEP:001',
    input: {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: null
            }
          }
        }
      }
    },
    expect: false,
    nestExpect: true
  },

  //? Deeply nested with value at bottom
  {
    uid: 'DEEP:002',
    input: {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: 'found'
            }
          }
        }
      }
    },
    expect: false,
    nestExpect: false
  },

  {
    uid: 'NO:004',
    input: {
      demo: null,
      yea: undefined,
      iKnowMan: {
        wtf: null,
        moreNull: [[''], '', null, { k: [null, undefined] }]
      }
    },
    nestExpect: true,
    expect: false
  },

  {
    uid: 'NA:004',
    input: [
      null,
      undefined,
      {
        wtf: null,
        moreNull: null
      }
    ],
    expect: false,
    nestExpect: true
  },

  {
    uid: 'NA:005',
    input: [
      null,
      undefined,
      {
        wtf: null,
        moreNull: ' '
      }
    ],
    expect: false,
    nestExpect: false
  }
]
