const { Op } = require("sequelize");
const Operation = require("../models/Operation");

class OperationsService {
  static async getAllDb(operation) {
    return await Operation.findAll(operation);
  }

  static async store(operation) {
    return await Operation.create(operation);
  }

  static async getOneById(id) {
    return await Operation.findOne({ where: { id } });
  }

  static async setUpdate(operation, id) {
    return await Operation.update(operation, { where: { id } });
  }

  static async deleteOneById(id) {
    return await Operation.destroy({ where: { id } });
  }

  static async getAllByUserId(userId) {
    return await Operation.findAll({
      where: {
        userId,
      },
      order: [["id", "DESC"]],
      limit: 10,
    });
  }

  static async getAllByOpType(userId, opType) {
    return await Operation.findAll({
      where: {
        userId,
        opType,
      },
    });
  }

  static async getAllByCategory(userId, category) {
    return await Operation.findAll({
      where: {
        userId,
        category,
      },
    });
  }
}

module.exports = OperationsService;
