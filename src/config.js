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

// Current configuration (mutable)
let currentConfig = { ...defaultConfig }

/**
 * Check if a value is an instance of a non-empty type
 * @param {string} constructorName - The constructor name to check
 * @returns {boolean}
 */
export const isNonEmptyType = (constructorName) => {
  if (!constructorName) return false
  const allNonEmptyTypes = [
    ...currentConfig.nonEmptyTypes,
    ...currentConfig.typedArrayTypes
  ]
  return allNonEmptyTypes.indexOf(constructorName) !== -1
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
}

/**
 * Reset configuration to defaults
 */
export const resetConfig = () => {
  currentConfig = { ...defaultConfig }
}

/**
 * Create a custom checker with specific configuration
 * @param {object} customConfig - Custom configuration for this checker
 * @returns {object} Object with configured checkers
 */
export const createChecker = (customConfig = {}) => {
  const config = { ...currentConfig, ...customConfig }

  const isNonEmptyTypeFn = (constructorName) => {
    if (!constructorName) return false
    const allNonEmptyTypes = [...config.nonEmptyTypes, ...config.typedArrayTypes]
    return allNonEmptyTypes.indexOf(constructorName) !== -1
  }

  return {
    config,
    isNonEmptyType: isNonEmptyTypeFn
  }
}

export default {
  getConfig,
  setConfig,
  resetConfig,
  createChecker,
  isNonEmptyType,
  defaultConfig
}
