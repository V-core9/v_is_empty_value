import { isNonEmptyType, getConfig } from './config.js'

/**
 * WeakSet to track visited objects for circular reference detection
 */
const visited = new WeakSet()

/**
 * Clear the visited set (for testing purposes)
 */
export const clearVisited = () => {
  visited._clear && visited._clear()
}

/**
 * Checks if a nested value is empty.
 * Handles circular references to prevent infinite loops.
 *
 * @param {*} value - The value to check.
 * @param {number} depth - Current recursion depth.
 * @param {WeakSet} seen - Set of already visited objects (for circular ref detection).
 * @param {object} options - Optional configuration override.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
const is_empty_nested = (value, depth = 0, seen = null, options = null) => {
  const config = options || getConfig()

  // Check max depth if configured
  if (config.maxNestedDepth > 0 && depth > config.maxNestedDepth) {
    return false // Treat as non-empty when max depth exceeded
  }

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

  // Handle objects (for circular reference detection and nested checking)
  if (typeof value === 'object') {
    // Circular reference detection
    if (config.checkCircular !== false) {
      const currentSeen = seen || new WeakSet()

      // If we've seen this object before, it's circular - treat as empty
      // (since the nested values were already checked)
      if (currentSeen.has(value)) return true

      // Mark as visited
      currentSeen.add(value)

      // Use the same seen set for recursive calls
      return checkObjectEmpty(value, depth, currentSeen, config)
    }

    return checkObjectEmpty(value, depth, seen, config)
  }

  // Handle strings - empty string is empty
  if (typeof value === 'string') return value === ''

  // Handle numbers - 0 is considered non-empty
  if (typeof value === 'number') return false

  // Handle booleans - both true and false are non-empty
  if (typeof value === 'boolean') return false

  // Default: use truthiness check
  return !value
}

/**
 * Helper to check if an object/array/Map/Set is empty (with circular ref tracking)
 */
const checkObjectEmpty = (value, depth, seen, config) => {
  // Handle arrays
  if (Array.isArray(value)) {
    if (value.length === 0) return true
    for (let i = 0; i < value.length; i++) {
      if (!is_empty_nested(value[i], depth + 1, seen, config)) return false
    }
    return true
  }

  // Handle Maps
  if (value instanceof Map) {
    if (value.size === 0) return true
    for (const [, v] of value) {
      if (!is_empty_nested(v, depth + 1, seen, config)) return false
    }
    return true
  }

  // Handle Sets
  if (value instanceof Set) {
    if (value.size === 0) return true
    for (const v of value) {
      if (!is_empty_nested(v, depth + 1, seen, config)) return false
    }
    return true
  }

  // Handle WeakMap and WeakSet - can't iterate, always non-empty
  if (value instanceof WeakMap || value instanceof WeakSet) return false

  // Handle regular objects
  const keys = Object.keys(value)
  if (keys.length === 0) return true

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      if (!is_empty_nested(value[key], depth + 1, seen, config)) return false
    }
  }
  return true
}

export default is_empty_nested

