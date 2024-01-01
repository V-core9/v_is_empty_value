/**
 * Checks if a value is empty.
 * @module v_is_empty_value
 */
import is_empty from './is_empty'
import is_empty_nested from './is_empty.nested'

/**
 * Checks if a value is empty.
 * @function isEmpty
 * @param {*} v - The value to check.
 * @returns {boolean} - Returns `true` if the value is empty, `false` otherwise.
 */
export const isEmpty = (v) => is_empty(v)

/**
 * Checks if a value is not empty.
 * @function isNotEmpty
 * @param {*} v - The value to check.
 * @returns {boolean} - Returns `true` if the value is not empty, `false` otherwise.
 */
export const isNotEmpty = (v) => !is_empty(v)

/**
 * Checks if a nested value is empty.
 * @function isEmptyNested
 * @param {*} v - The nested value to check.
 * @returns {boolean} - Returns `true` if the nested value is empty, `false` otherwise.
 */
export const isEmptyNested = (v) => is_empty_nested(v)

/**
 * Checks if a nested value is not empty.
 * @function isNotEmptyNested
 * @param {*} v - The nested value to check.
 * @returns {boolean} - Returns `true` if the nested value is not empty, `false` otherwise.
 */
export const isNotEmptyNested = (v) => !is_empty_nested(v)

export { is_empty, is_empty_nested }
