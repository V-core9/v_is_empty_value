const empty = (value) => {
  if (value instanceof Date || value instanceof Promise || value instanceof Error || typeof value === 'boolean') {
    //! Returns false if it's instance of Date Object
    return false;
  } else if (typeof value === "object" && value !== null) {
    //! Returns true if Array or Object is empty
    return (Object.keys(value) === null || Object.keys(value).length === 0);
  }
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
  isEmptySync: function (value) {
    return empty(value);
  },

  //? Not Empty Checker
  notEmptySync: function (value) {
    return !empty(value);
  }


};

module.exports = v_is_empty_value;
module.exports.default = v_is_empty_value;