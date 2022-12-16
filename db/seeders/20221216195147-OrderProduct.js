'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'orders_products',
      [
        {
          amount: 5,
          order_id: 1,
          product_id: 1,
        },
        {
          amount: 8,
          order_id: 1,
          product_id: 2,
        },
        {
          amount: 12,
          order_id: 2,
          product_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders_products', null, {});
  },
};
