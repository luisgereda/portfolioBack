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
      {
        title: "El mejor de Amsterdam",
        review: "recomendado para cualquier ocasion",
        stars: 5,
        userId: 1,
        restSpaceId: 3,
        date: "January 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Distinto",
        review: "un poco caro, pero es Amsterdam",
        stars: 5,
        userId: 1,
        restSpaceId: 4,
        date: "January 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Un Chifa de los buenos",
        review: "Tipico chifa peruano en Miami",
        stars: 5,
        userId: 1,
        restSpaceId: 5,
        date: "January 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Una cevicheria tradicional",
        review: "Cevicheria peruana en Miami",
        stars: 4,
        userId: 1,
        restSpaceId: 6,
        date: "January 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Lo Mejor de la comida criolla",
        review: "Me encanto",
        stars: 5,
        userId: 1,
        restSpaceId: 7,
        date: "January 2021",
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
