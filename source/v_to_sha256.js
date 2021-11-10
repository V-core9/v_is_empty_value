var crypto = require("crypto");

const v_to_sha256 = (inVal = null) => {
  try {
    return crypto.createHash("sha256").update(inVal).digest("hex");
  } catch (error) {
    return false;
  }
};

module.exports = v_to_sha256;
