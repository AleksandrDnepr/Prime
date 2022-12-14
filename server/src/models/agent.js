"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    static associate(models) {
      this.hasMany(models.Property, { foreignKey: "agentId" });
    }
  }
  Agent.init(
    {
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
      location: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Agent",
    }
  );
  return Agent;
};