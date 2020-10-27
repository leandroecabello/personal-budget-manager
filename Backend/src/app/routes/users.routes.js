const { Router } = require("express");
const UsersController = require("../controllers/users.controller");
const router = Router();

router
  .get("/", (req, res) => {
    res.send("ruta usuarios");
  })

  .post("/createUser", UsersController.add);

module.exports = router;
