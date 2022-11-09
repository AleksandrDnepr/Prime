'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Things', [
      { name: 'Box', color: 'blue', createdAt, updatedAt },
      { name: 'Ball', color: 'red', size: 3, createdAt, updatedAt },
      { name: 'Pyramid', color: 'green', size: 1, createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Things', null, {});
  }
};
