const User = require("../models/Users");

class UsersService {
  static async store(user) {
    return await User.create(user);
  }

  static async getOneByEmail(email) {
    return await User.findOne({ where: { email } });
  }
}

module.exports = UsersService;
