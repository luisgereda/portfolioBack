const { Router } = require("express");
const CountrySpace = require("../models").countrySpace;
const Photos = require("../models").photos;
const RestaurantSpace = require("../models").restSpace;
const Reviews = require("../models").reviews;
const Categories = require("../models").category;
const User = require("../models").user;

const router = new Router();

router.get("/countries", async (req, res, next) => {
  try {
    const allCountries = await CountrySpace.findAll({
      include: [{ model: Photos, include: { model: User, as: "user" } }],
    });
    console.log(allCountries);
    res.send(allCountries);
  } catch (e) {
    console.log(e);
    next();
  }
});

router.get("/photos", async (req, res, next) => {
  const limit = Math.min(req.query.limit || 12, 500);
  const offset = req.query.offset || 0;
  try {
    const allPhotos = await Photos.findAndCountAll({
      limit,
      offset,
      include: [
        { model: CountrySpace },
        { model: RestaurantSpace },
        { model: User, as: "user" },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.send({ images: allPhotos.rows, total: allPhotos.count });
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
        { model: Reviews, include: User },
        { model: Categories, attributes: ["cuisine"] },
      ],
      order: [[Reviews, "createdAt", "DESC"]],
    });
    console.log(allRestaurants);
    res.send(allRestaurants);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
