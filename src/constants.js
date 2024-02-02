export const knownInstances = ['Date', 'Promise', 'Error', 'Boolean', 'Number']

/**
 * Checks if a value is an instance of a specific type.
 *
 * @param {*} val - The value to check.
 * @returns {boolean} - Returns true if the value is an instance of a specific type, otherwise returns false.
 */
export const isKnownInstance = (val) => knownInstances.indexOf(val) !== -1

export const noKeys = (obj) => Object.keys(obj).length === 0

export const notNullObject = (value) => typeof value === 'object' && value !== null

