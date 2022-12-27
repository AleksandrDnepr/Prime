"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PropertiesAmenities extends Model {
    static associate(models) {}
  }
  PropertiesAmenities.init(
    {
      propId: {
        type: DataTypes.INTEGER,
        references: {
          model: Property,
          key: "id",
        },
      },
      amenityId: {
        type: DataTypes.INTEGER,
        references: {
          model: Amenity,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "PropertiesAmenities",
      paranoid: true,
    }
  );
  return PropertiesAmenities;
};
