"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Amenities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
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
    await queryInterface.bulkInsert(
      "Amenities",
      [
        {
          id: 1,
          title: "Air Conditioning",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 2,
          title: "Alarm Clock",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 3,
          title: "Balcony",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 4,
          title: "Clothes Dryer",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 5,
          title: "Coffee Maker",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 6,
          title: "Deck / Patio",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 7,
          title: "Dishes & Utensils",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 8,
          title: "Dishwasher",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 9,
          title: "Fireplace",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 10,
          title: "Freezer",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 11,
          title: "Garage",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 12,
          title: "Heating",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 13,
          title: "Ice Maker",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 14,
          title: "Internet",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 15,
          title: "Microwave",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 16,
          title: "Outdoor Grill",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 17,
          title: "Oven",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 18,
          title: "Parking On Street",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 19,
          title: "Refrigerator",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 20,
          title: "Satellite / Cable TV",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 21,
          title: "Security System",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 22,
          title: "Sofa Bed",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 23,
          title: "Stove",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 24,
          title: "Telephone",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 25,
          title: "Toaster",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 26,
          title: "Washing Machine",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          id: 27,
          title: "Water Cooler",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Amenities");
  },
};
