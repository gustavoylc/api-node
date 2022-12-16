'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          delivered: true,
          customer_id: 1,
        },
        {
          delivered: false,
          customer_id: 2,
        },
        {
          delivered: false,
          customer_id: 3,
        },
        {
          delivered: true,
          customer_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
