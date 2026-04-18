import { isNonEmptyType, currentConfig } from './config.js'

/**
 * Checks if a value is empty.
 * Optimized: primitives checked first, config only accessed when needed.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
export default function is_empty(value) {
  // Handle undefined and null
  if (value === undefined || value === null || value === '') return true

  const type = typeof value

  switch (type) {
    case 'boolean':
      return false
    case 'number':
      return Number.isNaN(value) ? currentConfig.treatNaNAsEmpty : false
    case 'function':
      return currentConfig.treatFunctionAsEmpty
    case 'symbol':
      return currentConfig.treatSymbolAsEmpty
    case 'bigint':
      return currentConfig.treatZeroBigIntAsEmpty ? value === 0n : false
    case 'object':
      // null already handled above, so this is a real object
      if (isNonEmptyType(value?.constructor?.name)) return false
      if (Array.isArray(value)) return value.length === 0
      if (value instanceof Map || value instanceof Set) return value.size === 0
      if (value instanceof WeakMap || value instanceof WeakSet) return false
      return Object.keys(value).length === 0
    default:
      return !value
  }
}
