import { isNonEmptyType, getConfig } from './config.js'

/**
 * Checks if a primitive value is empty.
 * @param {*} value - The value to check.
 * @param {object} config - Configuration options.
 * @returns {boolean} - Returns true if the value is empty.
 */
const isPrimitiveEmpty = (value, config) => {
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
 * Checks if a nested value is empty using iterative stack-based traversal.
 * Handles circular references to prevent infinite loops.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is empty, otherwise false.
 */
const is_empty_nested = (value) => {
  const config = getConfig()

  // Quick check for primitives
  if (typeof value !== 'object' || value === null) {
    return isPrimitiveEmpty(value, config)
  }

  // Check if it's a known non-empty instance type (Date, Promise, Error, etc.)
  if (isNonEmptyType(value?.constructor?.name)) return false

  // Handle WeakMap and WeakSet - can't iterate, always non-empty
  if (value instanceof WeakMap || value instanceof WeakSet) return false

  // Stack for iterative traversal: [{ value, iterator, depth }]
  const stack = []
  const seen = config.checkCircular !== false ? new WeakSet() : null

  // Push root object to stack
  stack.push({ value, depth: 0, processed: false })

  while (stack.length > 0) {
    const frame = stack[stack.length - 1]

    // If already processed (all children checked), pop and continue
    if (frame.processed) {
      stack.pop()
      if (seen && frame.value && typeof frame.value === 'object') {
        seen.delete(frame.value)
      }
      continue
    }

    const { value: currentValue, depth } = frame

    // Check max depth if configured
    if (config.maxNestedDepth > 0 && depth > config.maxNestedDepth) {
      return false // Treat as non-empty when max depth exceeded
    }

    // Mark as processed so we know when all children are done
    frame.processed = true

    // Handle circular references
    if (seen && currentValue && typeof currentValue === 'object') {
      if (seen.has(currentValue)) {
        // Circular reference found - treat as empty (already checked)
        continue
      }
      seen.add(currentValue)
    }

    // Get items to check based on type
    const itemsToCheck = []

    // Handle arrays
    if (Array.isArray(currentValue)) {
      if (currentValue.length === 0) continue // Empty array = empty, check next
      for (let i = 0; i < currentValue.length; i++) {
        itemsToCheck.push(currentValue[i])
      }
    }
    // Handle Maps
    else if (currentValue instanceof Map) {
      if (currentValue.size === 0) continue // Empty Map = empty, check next
      for (const [, v] of currentValue) {
        itemsToCheck.push(v)
      }
    }
    // Handle Sets
    else if (currentValue instanceof Set) {
      if (currentValue.size === 0) continue // Empty Set = empty, check next
      for (const v of currentValue) {
        itemsToCheck.push(v)
      }
    }
    // Handle regular objects
    else {
      const keys = Object.keys(currentValue)
      if (keys.length === 0) continue // Empty object = empty, check next
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (Object.prototype.hasOwnProperty.call(currentValue, key)) {
          itemsToCheck.push(currentValue[key])
        }
      }
    }

    // Check if any item is non-empty
    for (let i = 0; i < itemsToCheck.length; i++) {
      const item = itemsToCheck[i]

      // Quick primitive check
      if (typeof item !== 'object' || item === null) {
        if (!isPrimitiveEmpty(item, config)) {
          return false // Found non-empty primitive
        }
        continue
      }

      // Check for non-empty types
      if (isNonEmptyType(item?.constructor?.name)) {
        return false // Found non-empty type instance
      }

      // Check WeakMap/WeakSet
      if (item instanceof WeakMap || item instanceof WeakSet) {
        return false // Non-empty by definition
      }

      // Push nested object to stack for deeper checking
      stack.push({ value: item, depth: depth + 1, processed: false })
    }
  }

  return true // All items checked and found empty
}

export default is_empty_nested

