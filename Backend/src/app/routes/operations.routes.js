const { Router } = require("express");
const OperationsController = require("../controllers/operations.controller");
const { verifyToken } = require("../middlewares/auth");
const router = Router();

router
  .get("/", verifyToken, OperationsController.getAll)
  .post("/addOperation", verifyToken, OperationsController.add)
  // .get("/:id", OperationsController.getAll);
  .put("/editOperation/:id", verifyToken, OperationsController.update)
  .delete("/deleteOperation/:id", verifyToken, OperationsController.deleteById);

module.exports = router;
