// ! Example Tester Idea from https://www.30secondsofcode.org/js/s/blank-value/
// * Should Basically Do The Same Thing As is_empty underlaying function from src/is_empty.js
// ? Nested things may give false positives compared to "is_empty" and especially
// ? when compared to "is_empty_nested" function.

const isFalsy = (value) => !value
const isWhitespaceString = (value) => typeof value === 'string' && /^\s*$/.test(value)
const isEmptyCollection = (value) => (Array.isArray(value) || value === Object(value)) && !Object.keys(value).length
const isInvalidDate = (value) => value instanceof Date && Number.isNaN(value.getTime())
const isEmptySet = (value) => value instanceof Set && value.size === 0
const isEmptyMap = (value) => value instanceof Map && value.size === 0

const isBlank = (value) => {
  if (isEmptySet(value)) return true
  if (isEmptyMap(value)) return true
  if (isInvalidDate(value)) return true
  if (isWhitespaceString(value)) return true
  if (isEmptyCollection(value)) return true
  if (isFalsy(value)) return true
  return false
}

console.log(isBlank(null)) // true
console.log(isBlank(undefined)) // true
console.log(isBlank(0)) // true
console.log(isBlank(false)) // true
console.log(isBlank('')) // true
console.log(isBlank(' \r\n ')) // true
console.log(isBlank(NaN)) // true

const cLog = console.log

//
// #01.001 : Empty array
const arrayEmpty = []
cLog(`arrayEmpty | ${isBlank(arrayEmpty)} ===  true | [SLV]: ${arrayEmpty.length}`) // true 0
// #01.002 : (technically) Not empty array
const arraySomething = [[]]
cLog(`arraySomething | ${isBlank(arraySomething)} ===  false | [SLV]: ${arraySomething.length}`) // false 1

//
// #02.001 : Object that is empty
const objEmpty = {}
cLog(`objEmpty | ${isBlank(objEmpty)} ===  true | [SLV]: ${objEmpty}`) // true
// #02.002 : Object that is not empty
const objNotEmpty = { v: 11, t: 'ok' }
cLog(`objNotEmpty | ${isBlank(objNotEmpty)} ===  false | [SLV]: ${objNotEmpty}`) // false

//
// #03.001 : Date() that is invalid
const dateInvalide = new Date('hello')
cLog(`dateInvalide | ${isBlank(dateInvalide)} ===  true | [SLV]: ${dateInvalide}`) // true
// #03.002 : Date() that is valid
const dateValid = new Date()
cLog(`dateValid | ${isBlank(dateValid)} ===  false | [SLV]: ${dateValid}`) // false

//
// #04.001 : Set() that is empty
const demoSetEmpty = new Set()
cLog(`demoSetEmpty | ${isBlank(demoSetEmpty)} ===  true | [SLV]: ${demoSetEmpty.size}`) // true
// #04.002 : Set() that with a value
const demoSet = new Set([1, 2, 3])
cLog(`demoSet | ${isBlank(demoSet)} ===  false | [SLV]: ${demoSet.size}`) // false 3

//
// #05.001 : Map() that is empty
const demoMapEmpty = new Map()
cLog(`demoMapEmpty | ${isBlank(demoMapEmpty)} ===  true | [SLV]: ${demoMapEmpty.size}`) // true
// #05.002 : Map() that with a value
const demoMap = new Map()
demoMap.set('a', 0)
cLog(`demoMap | ${isBlank(demoMap)} ===  false | [SLV]: ${demoMap.size}`) // false 1
// #05.003 : Map() constructor can take an array of key-value pairs
const demoMap2 = new Map([
  ['a', 0],
  ['b', 1]
])
cLog(`demoMap2 | ${isBlank(demoMap2)} ===  false | [SLV]: ${demoMap2.size}`) // false 2
