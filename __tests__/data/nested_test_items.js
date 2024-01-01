module.exports = [
  //? Nested OBJECT : isEmpty >> false [even though it's empty]
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
    nestExpect: false,
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

  //? Nested ARRAY : isEmpty >> false [even though it's empty]
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
    nestExpect: false
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
