"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("photos", [
      {
        title: "cevichito",
        description: "nice ceviche",
        city: "Lima",
        hearts: 0,
        userId: 1,
        restSpaceId: 1,
        imageUrl:
          "https://cevicheweb.com/wp-content/uploads/2019/04/83.-ceviche-blanco-peruano.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "cevichito",
        description: "nice ceviche",
        city: "Lima",
        hearts: 0,
        userId: 1,
        countrySpaceId: 1,
        imageUrl:
          "https://d1uz88p17r663j.cloudfront.net/resized/af2fdda6c48894161fc865e695c40c91_CEVICHE_DE_PESCADO_1200_600.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "cevichito",
        description: "nice ceviche",
        city: "Lima",
        hearts: 0,
        userId: 1,
        restSpaceId: 2,
        imageUrl:
          "https://micevichedehoy.com/wp-content/uploads/2018/10/ceviche-carretillero_700x467-697x465.jpg",
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
    await queryInterface.bulkDelete("photos", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

// title: { type: DataTypes.STRING, allowNull: false },
//       description: DataTypes.TEXT,
//       city: { type: DataTypes.STRING, allowNull: false },
//       imageUrl: { type: DataTypes.STRING, allowNull: false },
//       hearts: { type: DataTypes.INTEGER, defaultValue: 0 },
//       userId: DataTypes.INTEGER,
//       spaceId: DataTypes.INTEGER,
//       countryId: DataTypes.INTEGER,
