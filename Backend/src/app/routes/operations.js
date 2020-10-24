const { Router } = require("express");
const OperationsController = require("../controllers/operations.controller");
const router = Router();

router
  .get("/", OperationsController.getAll)
  .post("/addOperation", OperationsController.add)
  // .get("/:id", OperationsController.getAll);
  .put("/editOperation/:id", OperationsController.update)
  .delete("/deleteOperation/:id", OperationsController.deleteById);

module.exports = router;
