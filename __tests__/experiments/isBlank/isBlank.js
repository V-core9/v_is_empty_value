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
  if (isFalsy(value)) return true
  if (isWhitespaceString(value)) return true
  if (isEmptyCollection(value)) return true
  if (isInvalidDate(value)) return true
  if (isEmptySet(value)) return true
  if (isEmptyMap(value)) return true
  return false
}

module.exports = isBlank
