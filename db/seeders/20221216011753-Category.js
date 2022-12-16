'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'JohnDoex',
          image: 'http://spiderman',
          
        },
        {
          name: 'accusamus beatae',
          image: 'https://via.placeholder.com/600/92c952',
        },
        {
          name: 'reprehenderit est',
          image: 'https://via.placeholder.com/600/771796',
        },        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
  },
};
