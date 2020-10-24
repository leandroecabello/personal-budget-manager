module.exports = (sequelize, type) => {
  return sequelize.define("operation", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    concept: {
      type: type.STRING,
      allowNull: false,
    },
    amount: {
      type: type.FLOAT,
      allowNull: false,
    },
    date: {
      type: type.DATE,
      defaultValue: type.NOW,
    },
    opType: {
      type: type.STRING,
      allowNull: false,
    },
  });
};
