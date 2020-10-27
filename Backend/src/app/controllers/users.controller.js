const bcrypt = require("bcryptjs");
const UsersService = require("../services/user.service");

class UsersController {
  static async add(req, res) {
    let { email, password } = req.body;
    try {
      if (password && email) {
        password = bcrypt.hashSync(password, 10);
        const user = await UsersService.store({ email, password });
        res
          .status(201)
          .json({ message: "Operation created successfully", user });
        console.log(user);
      } else {
        res.status(400).json({ message: "The fields are required" });
        console.log("The fields are required");
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

module.exports = UsersController;
