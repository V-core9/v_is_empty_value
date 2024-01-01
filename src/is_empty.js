/**
 * Checks if a value is empty.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
import { isInstance } from './constants'

const is_empty = (value) => {
  if (value === undefined) return true

  if (isInstance(value?.constructor?.name)) return false

  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length === 0
  }

  return !value
}

export default is_empty
