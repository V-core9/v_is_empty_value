/**
 * Checks if a value is empty.
 * @module v_is_empty_value
 */
import is_empty from './is_empty.js'
import is_empty_nested from './is_empty.nested.js'
import { getConfig, setConfig, resetConfig, createChecker, defaultConfig } from './config.js'

/**
 * Checks if a value is empty.
 * @function isEmpty
 * @param {*} v - The value to check.
 * @param {object} options - Optional configuration override.
 * @returns {boolean} - Returns `true` if the value is empty, `false` otherwise.
 */
export const isEmpty = (v, options) => is_empty(v, options)

/**
 * Checks if a value is not empty.
 * @function isNotEmpty
 * @param {*} v - The value to check.
 * @param {object} options - Optional configuration override.
 * @returns {boolean} - Returns `true` if the value is not empty, `false` otherwise.
 */
export const isNotEmpty = (v, options) => !is_empty(v, options)

/**
 * Checks if a nested value is empty.
 * Handles circular references automatically.
 * @function isEmptyNested
 * @param {*} v - The nested value to check.
 * @param {object} options - Optional configuration override.
 * @returns {boolean} - Returns `true` if the nested value is empty, `false` otherwise.
 */
export const isEmptyNested = (v, options) => is_empty_nested(v, 0, null, options)

/**
 * Checks if a nested value is not empty.
 * @function isNotEmptyNested
 * @param {*} v - The nested value to check.
 * @param {object} options - Optional configuration override.
 * @returns {boolean} - Returns `true` if the nested value is not empty, `false` otherwise.
 */
export const isNotEmptyNested = (v, options) => !is_empty_nested(v, 0, null, options)

/**
 * Configuration API for customizing behavior
 */
export const config = {
  /**
   * Get current configuration
   * @returns {object} Current configuration
   */
  get: getConfig,

  /**
   * Update configuration
   * @param {object} newConfig - Configuration to merge
   */
  set: setConfig,

  /**
   * Reset configuration to defaults
   */
  reset: resetConfig,

  /**
   * Default configuration values
   */
  defaults: defaultConfig
}

/**
 * Create a custom checker with specific configuration
 * @param {object} customConfig - Custom configuration
 * @returns {object} Object with configured isEmpty and isEmptyNested functions
 */
export const createCustomChecker = (customConfig = {}) => {
  const checker = createChecker(customConfig)
  return {
    isEmpty: (v) => is_empty(v, checker.config),
    isNotEmpty: (v) => !is_empty(v, checker.config),
    isEmptyNested: (v) => is_empty_nested(v, 0, null, checker.config),
    isNotEmptyNested: (v) => !is_empty_nested(v, 0, null, checker.config),
    config: checker.config
  }
}

// Backward compatibility exports
export { is_empty, is_empty_nested }

