import { isNonEmptyType } from './config'

/**
 * Checks if a value is empty.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
const is_empty = (value) => {
  if (isNonEmptyType(value?.constructor?.name)) return false
  return typeof value === 'object' && value !== null ? Object.keys(value).length === 0 : !value
}

export default is_empty
