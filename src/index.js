/**
 * Checks if a value is empty.
 * @module v_is_empty_value
 */
import is_empty from './is_empty.js'
import is_empty_nested from './is_empty.nested.js'
import configModule, { createChecker } from './config.js'

/**
 * Checks if a value is not empty.
 * @function is_not_empty
 * @param {*} v - The value to check.
 * @returns {boolean} - Returns `true` if the value is not empty, `false` otherwise.
 */
const is_not_empty = (v) => !is_empty(v)

/**
 * Checks if a nested value is not empty.
 * @function is_not_empty_nested
 * @param {*} v - The nested value to check.
 * @returns {boolean} - Returns `true` if the nested value is not empty, `false` otherwise.
 */
const is_not_empty_nested = (v) => !is_empty_nested(v)

/**
 * Configuration API for customizing behavior
 * Re-exported from config.js
 */
export { configModule as config }

/**
 * Create a custom checker with specific configuration
 * @param {object} customConfig - Custom configuration
 * @returns {object} Object with configured isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested functions and config
 */
export const createCustomChecker = (customConfig = {}) => {
  const checker = createChecker(customConfig)
  return {
    isEmpty: (v) => is_empty(v),
    isNotEmpty: (v) => !is_empty(v),
    isEmptyNested: (v) => is_empty_nested(v),
    isNotEmptyNested: (v) => !is_empty_nested(v),
    config: checker.config
  }
}

export {
  is_empty as isEmpty,
  is_empty_nested as isEmptyNested,
  is_not_empty as isNotEmpty,
  is_not_empty_nested as isNotEmptyNested,

  // Backward compatibility exports
  is_empty,
  is_empty_nested,
  is_not_empty,
  is_not_empty_nested
}
