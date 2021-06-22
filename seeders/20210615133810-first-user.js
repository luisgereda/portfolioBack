"use strict";
const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = require("../config/const");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Luis",
        email: "l@l.com",
        password: bcrypt.hashSync("123", SALT_ROUNDS),
        country: "Peru",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Punto Azul",
        email: "a@a.com",
        password: bcrypt.hashSync("a", SALT_ROUNDS),
        country: "Peru",
        restaurant: true,
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
    await queryInterface.bulkDelete("users", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
