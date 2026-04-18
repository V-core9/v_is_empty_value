import { isNonEmptyType, currentConfig } from './config.js'

/**
 * Checks if a value is empty.
 * Optimized: primitives checked first, config only accessed when needed.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
const is_empty = (value) => {
  // Handle primitives first (fast path - no config lookup)

  // Handle undefined
  if (value === undefined) return true

  // Handle null
  if (value === null) return true

  // Handle booleans - both true and false are non-empty
  if (typeof value === 'boolean') return false

  // Handle strings - empty string is empty
  if (typeof value === 'string') return value === ''

  // Handle numbers - 0 is considered non-empty (it's a valid value)
  if (typeof value === 'number') {
    // NaN check - use live config value
    return Number.isNaN(value) ? currentConfig.treatNaNAsEmpty : false
  }

  // Handle objects (including arrays, Maps, Sets, etc.)
  if (typeof value === 'object') {
    // Check if it's a known non-empty instance type (Date, Promise, Error, etc.)
    if (isNonEmptyType(value?.constructor?.name)) return false

    // Handle arrays
    if (Array.isArray(value)) return value.length === 0

    // Handle Maps and Sets - check if they have entries
    if (value instanceof Map || value instanceof Set) return value.size === 0

    // Handle WeakMap and WeakSet - always considered non-empty
    if (value instanceof WeakMap || value instanceof WeakSet) return false

    // Handle regular objects
    return Object.keys(value).length === 0
  }

  // Handle functions - use live config value
  if (typeof value === 'function') return currentConfig.treatFunctionAsEmpty

  // Handle symbols - use live config value
  if (typeof value === 'symbol') return currentConfig.treatSymbolAsEmpty

  // Handle BigInt - use live config value
  if (typeof value === 'bigint') {
    return currentConfig.treatZeroBigIntAsEmpty ? value === 0n : false
  }

  // Default: use truthiness check
  return !value
}

export default is_empty

