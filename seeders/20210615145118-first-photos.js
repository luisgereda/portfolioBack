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
        city: "Chiclayo",
        hearts: 0,
        userId: 1,
        countrySpaceId: 1,
        imageUrl:
          "https://d1uz88p17r663j.cloudfront.net/resized/af2fdda6c48894161fc865e695c40c91_CEVICHE_DE_PESCADO_1200_600.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "comida criolla",
        description: "muy bueno todo",
        city: "Lima",
        hearts: 0,
        userId: 1,
        restSpaceId: 2,
        imageUrl:
          "https://fastly.4sqi.net/img/general/600x600/6564069_sz8FoCmwr-p1GHMdyDAHa6BeZHVdmlio9cWFif_SBlA.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nazka",
        description: "Ceviches",
        city: "Amsterdam",
        hearts: 0,
        userId: 1,
        restSpaceId: 4,
        imageUrl:
          "https://i1.wp.com/www.bysam.nl/wp-content/uploads/2019/06/ceviche-nazka-peruaans-restaurant-amsterdam.jpg?fit=1200%2C901&ssl=1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nazka",
        description: "Ceviche Nazka",
        city: "Amsterdam",
        hearts: 0,
        userId: 1,
        restSpaceId: 4,
        imageUrl:
          "https://www.amsterdamfoodie.nl/wp-content/uploads/2019/08/NAZKA-Amsterdam-ceviche.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Seco con frijoles",
        description: "muy bueno",
        city: "Amsterdam",
        hearts: 0,
        userId: 1,
        restSpaceId: 3,
        imageUrl:
          "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625687282/WhatsApp_Image_2021-06-09_at_21.50.16_k3efqg.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Arroz con Mariscos",
        description: "sabor marino",
        city: "Amsterdam",
        hearts: 0,
        userId: 1,
        restSpaceId: 3,
        imageUrl:
          "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625687282/WhatsApp_Image_2021-07-07_at_21.47.18_1_frdlhi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ceviche de pescado",
        description: "buenisimo",
        city: "Amsterdam",
        hearts: 0,
        userId: 1,
        restSpaceId: 5,
        imageUrl:
          "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625687282/WhatsApp_Image_2021-07-07_at_21.47.18_2_h5vunf.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Combinado",
        description: "buenisimo este combinado",
        city: "Miami",
        hearts: 0,
        userId: 1,
        restSpaceId: 5,
        imageUrl:
          "https://media-cdn.tripadvisor.com/media/photo-s/08/48/1d/0c/chifa-du-kang-chinese.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Buen Chifa",
        description: "un tipakay bravo",
        city: "Miami",
        hearts: 0,
        userId: 1,
        restSpaceId: 5,
        imageUrl:
          "https://cdn.usarestaurants.info/assets/uploads/54599957a4f35ce1f9dae4a19d80539a_-united-states-florida-miami-dade-county-miami-chifa-du-kang-786-953-7165htm.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Anticuchos",
        description: "Me salieron buenazos",
        city: "Amsterdam",
        hearts: 0,
        userId: 1,
        countrySpaceId: 2,
        imageUrl:
          "https://viajes.nationalgeographic.com.es/medio/2019/12/18/anticuchos_1816d434_1254x837.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Lomo Saltado",
        description: "Preparo muy bien",
        city: "Madrid",
        hearts: 0,
        userId: 1,
        countrySpaceId: 3,
        imageUrl:
          "https://media-cdn.tripadvisor.com/media/photo-s/14/eb/8b/47/lomo-saltado.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tremenda leche de tigre",
        description: "Para todos hay",
        city: "Miami",
        hearts: 0,
        userId: 1,
        restSpaceId: 6,
        imageUrl:
          "https://s3-media0.fl.yelpcdn.com/bphoto/ae2hceI42kvNpxPqpQXlPA/l.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Llego mi causita",
        description: "Buen delivery",
        city: "Miami",
        hearts: 0,
        userId: 1,
        restSpaceId: 6,
        imageUrl:
          "https://srcevicherestaurant.com/wp-content/uploads/2017/01/Causa-de-Pulpo-al-Olivo.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Que tal rissotto",
        description: "Cumplio con mis expectativas",
        city: "Lima",
        hearts: 0,
        userId: 1,
        restSpaceId: 7,
        imageUrl:
          "https://media-cdn.tripadvisor.com/media/photo-s/09/af/85/81/t-anta-cc-jockey-plaza.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Lomito saltado",
        description: "Me encanto",
        city: "Lima",
        hearts: 0,
        userId: 1,
        restSpaceId: 7,
        imageUrl:
          "https://traveltoeat.com/wp-content/uploads/2016/04/Photo-20160405155433988.jpg",
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
