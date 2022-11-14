'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Messages', [
      { name: 'Alan', email: 'alan@gmail.com', text: 'Hello!', prop_id: 'A0001', createdAt, updatedAt },
      { name: 'Michel', email: 'michel@gmail.com', text: 'Price question', prop_id: 'B1902', createdAt, updatedAt },
      { name: 'Taras', email: 'taras@gmail.com', text: 'How are you?', prop_id: 'C1903', createdAt, updatedAt },
      { name: 'Ben', email: 'ben@gmail.com', text: 'Hi!', prop_id: 'D4904', createdAt, updatedAt },
      { name: 'Nina', email: 'nina@gmail.com', text: 'Call me baby', prop_id: 'A0005', createdAt, updatedAt },
      { name: 'Katya', email: 'katya@gmail.com', text: 'Wanna date?', prop_id: 'B1906', createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
