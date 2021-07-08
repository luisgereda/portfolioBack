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
        photo:
          "https://elcomercio.pe/resizer/cgHPcyDGn7nO9wys81pKiye8wq4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XHKDDWMQBNAHRASR523ZV53D6Q.jpg",
        phone: "(01)480 1165",
        logo: "http://puntoazulrestaurante.com/wp-content/uploads/2016/04/LOGO_PA_WEB.png",
        website: "https://puntoazulrestaurante.com/",
        openingH: "12:00pm - 22:00pm",

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
        photo:
          "https://media-cdn.tripadvisor.com/media/photo-s/11/00/f9/7b/bilderdijkstraat-181.jpg",
        phone: "06 12514337",
        logo: "https://static.thuisbezorgd.nl/images/restaurants/nl/Q077P7O/logo_465x320.png",
        website: "https://www.peruviancuisine.nl/",
        openingH: "14:00 - 22:00",
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
        photo: "https://live.staticflickr.com/117/294440462_24cf6e65d0_b.jpg",
        phone: "020 620 3749",
        logo: "https://www.casaperu.nl/jpg/logo.jpg",
        website: "https://www.casaperu.nl/main.html",
        openingH: "14:00 - 22:00",
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
        photo:
          "https://www.entreemagazine.nl/sites/default/files/afbeeldingen/stijl_en_design/Nazka2.jpg",
        phone: "020 223 4901",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFOPOtjGRG1yq66oglFtfR_kmGJohxt1rPQ&usqp=CAU",
        website: "https://www.nazka.nu/",
        openingH: "14:00 - 22:00",
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
