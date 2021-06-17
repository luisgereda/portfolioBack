const { Router } = require("express");
const CountrySpace = require("../models").countrySpace;
const Photos = require("../models").photos;
const RestaurantSpace = require("../models").restSpace;
const Reviews = require("../models").reviews;
const Categories = require("../models").category;
const RestCategories = require("../models").restcategories;

const router = new Router();

router.get("/countries", async (req, res, next) => {
  try {
    const allCountries = await CountrySpace.findAll({ include: Photos });
    console.log(allCountries);
    res.send(allCountries);
  } catch (e) {
    console.log(e);
    next();
  }
});

router.get("/photos", async (req, res, next) => {
  try {
    const allPhotos = await Photos.findAll({
      include: [{ model: CountrySpace }, { model: RestaurantSpace }],
    });
    console.log(allPhotos);
    res.send(allPhotos);
  } catch (e) {
    console.log(e);
    next();
  }
});

router.get("/restaurants", async (req, res, next) => {
  try {
    const allRestaurants = await RestaurantSpace.findAll();
    console.log(allRestaurants);
    res.send(allRestaurants);
  } catch (e) {
    console.log(e);
  }
});

router.get("/restaurants/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const allRestaurants = await RestaurantSpace.findByPk(id, {
      include: [
        Photos,
        Reviews,
        { model: Categories, attributes: ["cuisine"] },
      ],
    });
    console.log(allRestaurants);
    res.send(allRestaurants);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
