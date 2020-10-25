const { verify } = require("jsonwebtoken");
const { JWT } = require("../../config/config");
const moment = require("moment");

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log("must include token in headers");
    return res.status(400).json({ error: "must include token in headers" });
  }

  const token = req.headers.authorization.split(" ")[1];
  let checkToken = {};

  try {
    checkToken = verify(token, JWT.PRIVATE_KEY);
    console.log(checkToken);
    if (checkToken) {
      req.user = checkToken;
      console.log(req.user.userId);
    }
  } catch (err) {
    console.log(err);
    res
      .status(401)
      .json({ error: "Unauthorized.", message: "Token verification failed." });
  }

  if (checkToken.expiredAt < moment().unix()) {
    return res
      .status(401)
      .json({ error: "Unauthorized.", message: "Token expired." });
  }

  next();
};

module.exports = { verifyToken };
