const empty = (value) => {
  const vType = typeof value;

  const vInst = value?.constructor?.name || null;
  // console.log(vInst);

  //! Returns false if it's instance of Date, Promise, Error or typeof Boolean
  if (['Date', 'Promise', 'Error'].indexOf(vInst) !== -1 || vType === 'boolean') return false;
  //if (value instanceof Date || value instanceof Promise || value instanceof Error || vType === 'boolean') return false;

  //! Returns true if Array or Object is empty
  if (vType === "object" && value !== null) return (Object.keys(value) === null || Object.keys(value).length === 0);

  //! Returns true if value is null or undefined or empty string
  return (!value);

};


const v_is_empty_value = {

  //* Asynchronous
  //? isEmpty Checker
  isEmpty: async (value) => empty(value),

  //? Not Empty Checker
  notEmpty: async (value) => !empty(value),

  //* Synchronous functions
  //? isEmpty Checker
  isEmptySync: (value) => empty(value),

  //? Not Empty Checker
  notEmptySync: (value) => !empty(value),

};

module.exports = v_is_empty_value;

module.exports.default = v_is_empty_value;
