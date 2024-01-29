import { isInstance } from './constants'

/**
 * Checks if a nested value is empty.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
const is_empty_nested = (value) => {
  if (isInstance(value?.constructor?.name)) return false

  if (Array.isArray(value)) return value.length > 0 ? value.every((item) => is_empty_nested(item)) : true

  if (typeof value === 'object' && value !== null) {
    const keys = Object.keys(value)
    return keys.length > 0
      ? keys.every((key) => Object.prototype.hasOwnProperty.call(value, key) && is_empty_nested(value[key]))
      : true
  }

  return !value
}

export default is_empty_nested

