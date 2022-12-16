'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'John Doe x',
          image: 'http://spiderman',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          price: 50,
          category_id: 1,
        },
        {
          name: 'John Doe 1',
          image: 'http://jorge',
          description: 'Lorem ipsum dolor, sit elit.',
          price: 32,
          category_id: 2,
        },
        {
          name: 'John Doe 2',
          image: 'http://pedro',
          description: 'consectetur adipisicing elit.',
          price: 98,
          category_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
