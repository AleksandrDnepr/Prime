'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Messages', 'email', {
      type: Sequelize.STRING
    });

    await queryInterface.addColumn('Messages', 'text', {
      type: Sequelize.STRING
    })  

    await queryInterface.addColumn('Messages', 'prop_id', {
      type: Sequelize.INTEGER
    })
  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.removeColumn('Messages', 'email');
    await queryInterface.removeColumn('Messages', 'text');
    await queryInterface.removeColumn('Messages', 'prop_id');
  }
};
