'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Thing extends Model {}

  Thing.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    color: DataTypes.STRING,
  }, { sequelize, modelName: 'Thing', });

  return Thing;
};