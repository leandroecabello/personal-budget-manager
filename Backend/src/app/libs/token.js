const { sign } = require("jsonwebtoken");
const moment = require("moment");
const { JWT } = require("../../config/config");

const generateToken = (user) => {
  const payload = {
    userId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5, "minutes").unix(),
  };

  return sign(JSON.stringify(payload), JWT.PRIVATE_KEY);
};

module.exports = { generateToken };