"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("restSpaces", [
      {
        name: "Punto Azul",
        address: "Calle San Martin 595, Miraflores 15074, Perú",
        city: "Lima",
        country: "Peru",
        verified: true,
        userId: 2,
        categoryId: 2,
        latitude: -12.126186791992355,
        longitude: -77.02809561607903,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Peruvian Cuisine",
        address: "Bilderdijkstraat 181HS, 1053 KR Amsterdam",
        city: "Amsterdam",
        country: "Netherlands",
        verified: false,
        categoryId: 1,
        latitude: 52.36708356429637,
        longitude: 4.872660769296215,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Casa Peru",
        address: "Voldenpark",
        city: "Amsterdam",
        country: "Netherlands",
        verified: false,
        categoryId: 1,
        latitude: 52.36654489766525,
        longitude: 4.883043413472207,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nazka",
        address: "Van Ostadestraat 354, 1073 TZ Amsterdam",
        city: "Amsterdam",
        country: "Netherlands",
        verified: false,
        categoryId: 1,
        latitude: 52.353813080882105,
        longitude: 4.9019547269661485,
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
    await queryInterface.bulkDelete("restSpaces", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
