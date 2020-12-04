const OperationsService = require("../services/operation.service");

class OperationsController {
  static async getAll(req, res) {
    //console.log(req.user.userId);
    try {
      const operations = await OperationsService.getAllDb();
      console.log(operations);
      res.status(200).json(operations);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async add(req, res) {
    const { userId } = req.user;
    const { concept, amount, opType, date, category } = req.body;
    try {
      const operation = await OperationsService.store({
        concept,
        amount,
        date,
        opType,
        category,
        userId,
      });
      res
        .status(201)
        .json({ message: "Operation created successfully", operation });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    //console.log(req.user.userId);
    try {
      const operation = await OperationsService.getOneById(id);
      console.log(operation);
      res.status(200).json(operation);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { concept, amount, date, category } = req.body;
    try {
      const operation = await OperationsService.setUpdate(
        { concept, amount, date, category },
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

  static async getAllByUser(req, res) {
    const { userId } = req.user;
    try {
      const operations = await OperationsService.getAllByUserId(userId);
      console.log(operations);
      res.status(200).json(operations);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async getByOpType(req, res) {
    const { userId } = req.user;
    const { opType } = req.body;

    let totalIncome = 0;
    let totalDischarge = 0;
    try {
      const operations = await OperationsService.getAllByOpType(userId, opType);

      for (let op of operations) {
        console.log(op.opType);
        if (op.opType === "ingreso") {
          totalIncome += op.amount;
        } else {
          totalDischarge += op.amount;
        }
      }

      const balance = totalIncome - totalDischarge;

      res.status(200).json({ totalIncome, totalDischarge, balance });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async getByCategory(req, res) {
    const { userId } = req.user;
    const { category } = req.body;
    try {
      const operations = await OperationsService.getAllByCategory(
        userId,
        category
      );
      console.log(operations);
      res.status(200).json(operations);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong. Please retry or contact with an admin.",
        message: err,
      });
    }
  }

  static async getBalance(req, res) {
    const { userId } = req.user;

    let totalIncome = 0;
    let totalDischarge = 0;
    try {
      const operations = await OperationsService.getAllByUserId(userId);

      for (let op of operations) {
        console.log(op.opType);
        if (op.opType === "ingreso") {
          totalIncome += op.amount;
        } else {
          totalDischarge += op.amount;
        }
      }

      const balance = totalIncome - totalDischarge;

      res.status(200).json({ totalIncome, totalDischarge, balance });
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
