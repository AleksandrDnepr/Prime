"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    static associate(models) {
      // define association here
    }
  }
  Agent.init(
    {
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
      location: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Agent",
    }
  );
  return Agent;
};
