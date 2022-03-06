//? Function that checks if the value is empty
v_is_empty = async (value) => {
  //! Returns false if it's instance of Date Object
  if (value instanceof Date) return false;
  //! Returns true if Array or Object is empty
  if (typeof value === 'object' && value !== null) return (Object.keys(value) === null || Object.keys(value).length === 0);
  //! Returns true if value is null or undefined or empty string
  return (!value ? true : false);
};

//? Function that will check if value is not empty
v_is_not_empty = async (value) => !(await v_is_empty(value));

module.exports = {
  isEmpty: v_is_empty,
  notEmpty: v_is_not_empty
};