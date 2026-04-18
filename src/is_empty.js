import { isNonEmptyType, getConfig } from './config.js'

/**
 * Checks if a value is empty.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
const is_empty = (value) => {
  const config = getConfig()

  // Handle undefined
  if (value === undefined) return true

  // Handle null
  if (value === null) return true

  // Handle NaN - configurable behavior
  if (Number.isNaN(value)) return config.treatNaNAsEmpty !== false

  // Handle functions - configurable behavior
  if (typeof value === 'function') return config.treatFunctionAsEmpty !== false

  // Handle symbols - configurable behavior
  if (typeof value === 'symbol') return config.treatSymbolAsEmpty !== false

  // Handle BigInt - configurable behavior for 0n
  if (typeof value === 'bigint') {
    return config.treatZeroBigIntAsEmpty ? value === 0n : false
  }

  // Check if it's a known non-empty instance type (Date, Promise, Error, etc.)
  if (isNonEmptyType(value?.constructor?.name)) return false

  // Handle objects (including arrays)
  if (typeof value === 'object') {
    // Handle arrays
    if (Array.isArray(value)) return value.length === 0

    // Handle Maps and Sets - check if they have entries
    if (value instanceof Map || value instanceof Set) return value.size === 0

    // Handle WeakMap and WeakSet - always considered non-empty (can't check size)
    if (value instanceof WeakMap || value instanceof WeakSet) return false

    // Handle regular objects
    return Object.keys(value).length === 0
  }

  // Handle strings - empty string is empty
  if (typeof value === 'string') return value === ''

  // Handle numbers - 0 is considered non-empty (it's a valid value)
  if (typeof value === 'number') return false

  // Handle booleans - both true and false are non-empty
  if (typeof value === 'boolean') return false

  // Default: use truthiness check for any other types
  return !value
}

export default is_empty

