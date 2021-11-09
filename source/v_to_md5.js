var crypto = require('crypto');

v_to_md5 = (inVal = null) => {
  try {
    return crypto.createHash('md5').update(inVal).digest('hex');
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = v_to_md5;
