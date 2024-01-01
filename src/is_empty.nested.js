import { isInstance } from './constants'

/**
 * Checks if a nested value is empty.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
const is_empty_nested = (value) => {
  if (value === undefined) return true

  if (isInstance(value?.constructor?.name)) return false

  if (Array.isArray(value)) {
    if (value.length === 0) return true
    let i = 0
    while (i < value.length) {
      if (!is_empty_nested(value[i])) return false
      i++
    }
    return true
  }

  if (typeof value === 'object' && value !== null) {
    const keys = Object.keys(value)
    if (keys.length === 0) return true
    let i = 0
    while (i < keys.length) {
      const key = keys[i]
      if (value.hasOwnProperty(key) && !is_empty_nested(value[key])) return false
      i++
    }
    return true
  }

  return !value
}

export default is_empty_nested
