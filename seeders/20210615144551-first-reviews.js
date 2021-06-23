"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("reviews", [
      {
        title: "amazing food",
        review: "I went with my GF, it was nice",
        stars: 4,
        userId: 1,
        restSpaceId: 1,
        date: "jun 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "missing something",
        review: "didn't like it",
        stars: 1,
        userId: 1,
        restSpaceId: 2,
        date: "december 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
    await queryInterface.bulkDelete("reviews", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
