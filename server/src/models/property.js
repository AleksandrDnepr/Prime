"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      // define association here
    }
  }
  Property.init(
    {
      id: DataTypes.STRING,
      title: DataTypes.STRING,
      area: DataTypes.INTEGER,
      bedrooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.INTEGER,
      deal: DataTypes.STRING,
      preview: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
