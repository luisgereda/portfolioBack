"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("countrySpaces", [
      {
        name: "Peru",
        logo: "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625528015/logoperu_wrqmqp.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Netherlands",
        logo: "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625528016/logoholanda_dep4rq.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spain",
        logo: "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625528015/spainlogo_k8nysi.png",
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
    await queryInterface.bulkDelete("countrySpaces", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
