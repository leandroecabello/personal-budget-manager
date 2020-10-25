const OperationsService = require("../services/operation.service");
//const moment = require("moment");

class OperationsController {
  static async getAll(req, res) {
    //console.log(req.user.userId);
    try {
      const operations = await OperationsService.getAllDb();
      res.status(200).json(operations);
    } catch (err) {
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async add(req, res) {
    const { concept, amount, opType } = req.body;
    try {
      const operation = await OperationsService.store({
        concept,
        amount,
        opType,
      });
      res
        .status(201)
        .json({ message: "Operation created successfully", operation });
    } catch (err) {
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { concept, amount, date = new Date() } = req.body;
    try {
      const operation = await OperationsService.setUpdate(
        { concept, amount, date },
        id
      );
      res
        .status(200)
        .json({ message: "Operation updated successfully", operation });
    } catch (err) {
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async deleteById(req, res) {
    const { id } = req.params;
    try {
      await OperationsService.deleteOneById(id);
      res
        .status(200)
        .json({ message: `Operation with id: ${id} was deleted successfully` });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }
}

module.exports = OperationsController;
