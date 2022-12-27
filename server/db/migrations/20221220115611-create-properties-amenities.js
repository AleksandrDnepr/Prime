"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PropertiesAmenities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      propId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Properties",
          },
          key: "id",
        },
      },
      amenityId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Amenities",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PropertiesAmenities");
  },
};
