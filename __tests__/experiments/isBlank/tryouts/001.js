const isBlank = require('../isBlank')
const { isEmpty } = require('../../../..')

console.assert(typeof isBlank === 'function', 'isBlank should be a function')

const demoMap = new Map([['a', 0]])
const demoEmptyMap = new Map()

const demoSet = new Set([1, 2, 3, 4, 5])
const demoEmptySet = new Set()

const dateInvalid = new Date('hello')
const dateValid = new Date()

const arrayEmpty = []
const arraySomething = [0]

const objEmpty = {}
const objNotEmpty = { v: 11, t: 'ok' }

const testCases = [
  [null, true, 'null >> true', true],
  [undefined, true, 'undefined >> true', true],
  [NaN, true, 'NaN >> true', false],

  [0, true, '0 >> true', false],
  [1, false, '1 >> false', false],

  [false, true, 'false >> true', false],
  [true, false, 'true >> false', false],

  ['', true, '"" >> true', true],
  [' \r\n ', true, '" \r\n " >> true', true],
  ['hello', false, '"hello" >> false', false],

  [arrayEmpty, true, '[] >> true', true],
  [arraySomething, false, '[0] >> false', false],

  [objEmpty, true, '{} >> true', true],
  [objNotEmpty, false, '{ a: 0 } >> false', false],

  // TODO: 🔁 RETHINK this test case
  // NOTE: Rethink the problem since this falls into "v_rifier" category of problems.
  [dateInvalid, true, 'new Date("hello") >> true', false], // true],
  [dateValid, false, 'new Date() >> false', false],

  [demoEmptySet, true, 'new Set() >> true', true],
  // TODO: 🚩 Fix this test case for "isEmpty()"
  // NOTE: Set with a value is not empty
  [demoSet, false, 'new Set([1, 2, 3, 4, 5]) >> false', false],

  [demoEmptyMap, true, 'new Map() >> true', true],
  // TODO: 🚩 Fix this test case for "isEmpty()"
  // NOTE: Map with a value is not empty
  [demoMap, false, 'new Map([["a", 0]]) >> false', false]
]

const printInput = (input) =>
  !!input && input instanceof Date && input['toISOString'] !== undefined && !Number.isNaN(input.getTime())
    ? input.toISOString()
    : JSON.stringify(input)

console.log(`\n[ isBlank ]>------------------------------------`)

let i = 0
testCases.forEach(([input, expected, info]) => {
  console.assert(isBlank(input) === expected, `#${i} | ${info} : isBlank(${printInput(input)}) should be ${expected}`)
  i++
})
console.log(`-------------------------------------\n`)

console.log(`[ isEmpty ]>------------------------------------`)

i = 0
testCases.forEach(([input, expected, info, expectedIsEmpty]) => {
  console.assert(
    isEmpty(input) === expectedIsEmpty,
    `#${i} | ${info} : isEmpty(${printInput(input)}) should be ${expectedIsEmpty}`
  )
  i++
})

console.log(`-------------------------------------\n`)
