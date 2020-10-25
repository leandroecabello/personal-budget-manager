const UsersService = require("../services/user.service");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../libs/token");

class LoginController {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await UsersService.getOneByEmail(email);
      if (user) {
        const compare = bcrypt.compareSync(password, user.password);
        if (compare) {
          res.status(200).json({ succes: generateToken(user) });
        } else {
          res.status(400).json({ message: " user or password error " });
        }
      } else {
        res.status(400).json({ message: " user or password error " });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }
}

module.exports = LoginController;
