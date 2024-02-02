import { isKnownInstance, noKeys, notNullObject } from './constants'

/**
 * Checks if a value is empty.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
export default function is_empty(value) {
  if (value === undefined) return true

  if (isKnownInstance(value?.constructor?.name)) return false

  return notNullObject(value) ? noKeys(value) : !value
}

