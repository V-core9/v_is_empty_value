const v_is_empty = async (value) => {
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


module.exports = {
  //? Function that checks if the value is empty
  isEmpty: async (value) => await v_is_empty(value),
  //? Function that will check if value is not empty
  notEmpty: async (value) => !await v_is_empty(value),
};