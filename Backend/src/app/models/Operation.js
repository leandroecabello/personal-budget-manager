const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");
const User = require("./Users");

const Operation = sequelize.define("operation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  concept: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  opType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Operation, {
  as: "user",
  foreingKey: "userId",
});

module.exports = Operation;
