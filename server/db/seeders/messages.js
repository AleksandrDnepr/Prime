'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Messages', [
      { name: 'Alan', email: 'alan@gmail.com', text: 'Hello!', prop_id: 1, createdAt, updatedAt },
      { name: 'Michel', email: 'michel@gmail.com', text: 'Price question', prop_id: 3, createdAt, updatedAt },
      { name: 'Taras', email: 'taras@gmail.com', text: 'How are you?', prop_id: 2, createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
