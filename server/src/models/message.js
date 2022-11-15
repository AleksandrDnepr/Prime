'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}
  
  Message.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    text: DataTypes.TEXT,
    prop_id: DataTypes.STRING,
  }, { sequelize, modelName: 'Message',
  });
  return Message;
};