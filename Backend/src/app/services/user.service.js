const { tables } = require("../../database");
const User = tables.User;

class UsersService {
  static async store(user) {
    return await User.create(user);
  }

  static async getOneByEmail(user_email) {
    return await User.findOne({ where: { email: user_email } });
  }
}

module.exports = UsersService;
