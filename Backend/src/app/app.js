const express = require("express");
const morgan = require("morgan");
const operationsRoutes = require("./routes/operations.routes");
const usersRoutes = require("./routes/users.routes");
const loginRoutes = require("./routes/login.routes");
const app = express();

// Config
app.set("port", process.env.PORT || 3000);

// Middlewares
app
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

// Routes
app
  .use("/api/users", usersRoutes)
  .use("/api/login", loginRoutes)
  .use("/api/operations", operationsRoutes);

module.exports = app;
