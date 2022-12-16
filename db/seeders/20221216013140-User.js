'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'john@doe.com',
          password: 'dskfj435kf3',
          role: 'customer',
        },
        {
          email: 'john1@doe.com',
          password: 'ggggggg',
          role: 'admin',
        },
        {
          email: 'john2@doe.com',
          password: 'ffff44',
          role: 'customer',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
