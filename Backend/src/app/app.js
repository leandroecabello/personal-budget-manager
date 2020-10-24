const express = require("express");
const morgan = require("morgan");
const operationsRoutes = require("./routes/operations");
const app = express();

// Config
app.set("port", process.env.PORT || 3000);

// Middlewares
app
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/operations", operationsRoutes);

module.exports = app;
