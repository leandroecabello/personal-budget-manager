const Sequelize = require("sequelize");
const config = require("./config/config");

const OperationModel = require("./app/models/Operation");

const dbQueryString = `mysql://${config.DDBB.USER}:${config.DDBB.PASS}@${config.DDBB.HOST}:${config.DDBB.PORT}/${config.DDBB.NAME}`;
const sequelize = new Sequelize(dbQueryString);

const db = {};

db.dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

db.dbSyncTables = async () => {
  await sequelize.sync({ force: false });
  console.log("Synchronized tables");
};

db.tables = {
  Operation: OperationModel(sequelize, Sequelize),
};

module.exports = db;
