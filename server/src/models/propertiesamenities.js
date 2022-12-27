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
          model: {
            tableName: "Properties",
          },
          key: "id",
        },
      },
      amenityId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Amenities",
          },
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
