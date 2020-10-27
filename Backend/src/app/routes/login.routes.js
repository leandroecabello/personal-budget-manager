const { Router } = require("express");
const LoginController = require("../controllers/login.controller");
const router = Router();

router
  .get("/", (req, res) => {
    res.send("login");
  })

  .post("/", LoginController.login);

module.exports = router;
