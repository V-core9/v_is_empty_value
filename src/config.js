/**
 * Configuration system for v_is_empty_value
 * Allows customization of how different types are treated
 */

// Default configuration
const defaultConfig = {
  // Types that are always considered not empty (instances with value)
  // Note: Map and Set are NOT here because they can be empty (size === 0)
  // Note: WeakMap and WeakSet ARE here because we can't check their size
  nonEmptyTypes: [
    'Date',
    'Promise',
    'Error',
    'Boolean',
    'Number',
    'RegExp',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'DataView'
  ],

  // Typed array types
  typedArrayTypes: [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array'
  ],

  // Whether to treat NaN as empty (recommended: true)
  treatNaNAsEmpty: true,

  // Whether to treat functions as empty (recommended: true for data validation)
  treatFunctionAsEmpty: true,

  // Whether to treat symbols as empty (recommended: true)
  treatSymbolAsEmpty: true,

  // Whether to treat BigInt 0n as empty (recommended: false)
  treatZeroBigIntAsEmpty: false,

  // Max depth for nested checking (0 = unlimited, use with caution)
  maxNestedDepth: 0,

  // Whether to check for circular references
  checkCircular: true
}

// Current configuration (mutable) - exported as live binding
export let currentConfig = { ...defaultConfig }

// Cache non-empty types as Set for O(1) lookup
let nonEmptyTypesSet = new Set([
  ...currentConfig.nonEmptyTypes,
  ...currentConfig.typedArrayTypes
])

/**
 * Check if a value is an instance of a non-empty type
 * Uses Set for O(1) lookup performance
 * @param {string} constructorName - The constructor name to check
 * @returns {boolean}
 */
export const isNonEmptyType = (constructorName) => {
  if (!constructorName) return false
  return nonEmptyTypesSet.has(constructorName)
}

/**
 * Get current configuration
 * @returns {object}
 */
export const getConfig = () => ({ ...currentConfig })

/**
 * Update configuration (shallow merge)
 * @param {object} newConfig - New configuration options
 */
export const setConfig = (newConfig) => {
  currentConfig = { ...currentConfig, ...newConfig }
  // Rebuild Set when config changes
  nonEmptyTypesSet = new Set([
    ...currentConfig.nonEmptyTypes,
    ...currentConfig.typedArrayTypes
  ])
}

/**
 * Reset configuration to defaults
 */
export const resetConfig = () => {
  currentConfig = { ...defaultConfig }
  // Rebuild Set when config is reset
  nonEmptyTypesSet = new Set([
    ...currentConfig.nonEmptyTypes,
    ...currentConfig.typedArrayTypes
  ])
}

/**
 * Create a custom checker with specific configuration
 * @param {object} customConfig - Custom configuration for this checker
 * @returns {object} Object with configured checkers
 */
export const createChecker = (customConfig = {}) => {
  const config = { ...currentConfig, ...customConfig }

  // Cache as Set for O(1) lookup
  const nonEmptyTypesSetLocal = new Set([
    ...config.nonEmptyTypes,
    ...config.typedArrayTypes
  ])

  const isNonEmptyTypeFn = (constructorName) => {
    if (!constructorName) return false
    return nonEmptyTypesSetLocal.has(constructorName)
  }

  return {
    config,
    isNonEmptyType: isNonEmptyTypeFn
  }
}

export default {
  get: getConfig,
  set: setConfig,
  reset: resetConfig,
  createChecker,
  isNonEmptyType,
  defaults: defaultConfig
}
