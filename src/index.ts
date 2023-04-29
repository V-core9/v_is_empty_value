import { V_Is_Empty_Value } from "../index";

const is_empty = (value: any) => {
  const vInst = value?.constructor?.name || null;
  //! Returns false if it's instance of Date, Promise, Error or typeof Boolean
  if (["Date", "Promise", "Error", "Boolean"].indexOf(vInst) !== -1)
    return false;
  //! Returns true if Array or Object is empty
  if (typeof value === "object" && value !== null)
    return Object.keys(value) === null || Object.keys(value).length === 0;
  //! Returns true if value is null or undefined or empty string
  return !value;
};

const v_is_empty_value: V_Is_Empty_Value = {
  //* Asynchronous
  //? isEmpty Checker
  isEmpty: async (value) => is_empty(value),
  //? Not Empty Checker
  notEmpty: async (value) => !is_empty(value),

  //* Synchronous functions
  //? isEmpty Checker
  isEmptySync: (value) => is_empty(value),
  //? Not Empty Checker
  notEmptySync: (value) => !is_empty(value),
};

module.exports = v_is_empty_value;
module.exports.default = v_is_empty_value;
