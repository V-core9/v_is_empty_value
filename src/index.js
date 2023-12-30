/**
 * Array of instances.
 * @type {Array<string>}
 */
const instances = ['Date', 'Promise', 'Error', 'Boolean', 'Number']

/**
 * Checks if a value is an instance of a specific class.
 * @param {string} iName - The name of the class to check against.
 * @returns {boolean} - Returns true if the value is an instance of the specified class, false otherwise.
 */
const isInstance = (iName) => instances.indexOf(iName) !== -1

/**
 * Checks if a value is empty.
 * @param {*} val - The value to check.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */

export const is_empty = (value) => {
  //if (value === undefined) return true;
  const vInst = value?.constructor?.name || null

  if (isInstance(vInst)) return false

  if (typeof value === 'object' && value !== null) return Object.keys(value) === null || Object.keys(value).length === 0

  return !value
}

/**
 * Checks if a value is empty.
 * @param {*} val - The value to check.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */
export const isEmpty = (v) => is_empty(v)

/**
 * Checks if a value is not empty.
 * @param {*} val - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
export const notEmpty = (v) => !is_empty(v)

