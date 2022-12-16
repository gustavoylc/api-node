'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'customers',
      [
        {
          name: 'John Doe',
          last_name: 'John Doe',
          phone: '5555555',
          user_id: 1,
        },
        {
          name: 'John',
          last_name: 'Doe',
          phone: '666666666',
          user_id: 2,
        },
        {
          name: 'Doe',
          last_name: 'John',
          phone: '77777777',
          user_id: 3,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
