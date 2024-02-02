import { isKnownInstance, notNullObject } from './constants'

/**
 * Checks if a nested value is empty.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
export default function is_empty_nested(value) {
  if (value === undefined) return true

  if (isKnownInstance(value?.constructor?.name)) return false

  if (Array.isArray(value)) {
    if (value.length === 0) return true
    let i = 0
    while (i < value.length) {
      if (!is_empty_nested(value[i])) return false
      i++
    }
    return true
  }

  if (notNullObject(value)) {
    const keys = Object.keys(value)
    if (keys.length === 0) return true
    let i = 0
    while (i < keys.length) {
      const key = keys[i]
      if (Object.prototype.hasOwnProperty.call(value, key) && !is_empty_nested(value[key])) return false
      i++
    }
    return true
  }

  return !value
}

