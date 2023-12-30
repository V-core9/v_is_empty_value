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
const isInstance = (iName = null) => instances.indexOf(iName) !== -1

/**
 * Checks if a value is empty.
 * @param {*} val - The value to check.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */
export const is_empty = (value) => {
  if (value === undefined) return true

  if (isInstance(value?.constructor?.name)) return false

  if (typeof value === 'object' && value !== null) {
    const oKeys = Object.keys(value)
    return oKeys.length === 0
  }

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
export const isNotEmpty = (v) => !is_empty(v)

