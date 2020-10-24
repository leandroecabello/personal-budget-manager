const { tables } = require("../../database");
const Operation = tables.Operation;

class OperationsService {
  static async getAllDb() {
    return await Operation.findAll();
  }

  static async store(operation) {
    return await Operation.create(operation);
  }

  static async setUpdate(operation, id) {
    return await Operation.update(operation, { where: { id } });
  }

  static async deleteOneById(id) {
    return await Operation.destroy({ where: { id } });
  }
}

module.exports = OperationsService;
