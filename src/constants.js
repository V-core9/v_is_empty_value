/**
 * Checks if a value is an instance of a specific type.
 *
 * @param {*} val - The value to check.
 * @returns {boolean} - Returns true if the value is an instance of a specific type, otherwise returns false.
 */
export const isInstance = (val) => ['Date', 'Promise', 'Error', 'Boolean', 'Number'].indexOf(val) !== -1

