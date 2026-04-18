import { isNonEmptyType } from './config.js'

/**
 * Checks if a value is an instance of a non-empty type.
 * @deprecated Use isNonEmptyType from './config.js' instead
 * @param {*} val - The value to check.
 * @returns {boolean} - Returns true if the value is an instance of a non-empty type.
 */
export const isInstance = (val) => isNonEmptyType(val)

// Re-export from config for backward compatibility
export { isNonEmptyType } from './config.js'
