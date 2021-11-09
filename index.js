const v_to_md5 = (inVal = null) => {
  try {
    console.log(JSON.stringify(inVal));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = v_to_md5;
