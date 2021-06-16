"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        cuisine: "Peruvian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { cuisine: "Cevicheria", createdAt: new Date(), updatedAt: new Date() },
      { cuisine: "Chifa", createdAt: new Date(), updatedAt: new Date() },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
