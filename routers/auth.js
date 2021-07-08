const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/const");
const Photos = require("../models").photos;
const Review = require("../models").reviews;
const Country = require("../models").countrySpace;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name, country } = req.body;
  if (!email || !password || !name || !country) {
    return res.status(400).send("Please provide an email, password and a name");
  }
  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      country,
    });

    delete newUser.dataValues["password"];

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

router.get("/mydata", authMiddleware, async (req, res) => {
  try {
    const { id } = req.user;
    const data = await User.findByPk(parseInt(id), {
      include: [{ model: Photos, as: "photos" }],
      order: [[Photos, "createdAt", "DESC"]],
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

router.delete("/deletephoto/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    //  const { userId } = req.user;
    const toDelete = await Photos.findByPk(parseInt(id));
    const deleted = await toDelete.destroy();
    // const data = await User.findByPk(parseInt(userId), { include: Photos });
    res.json(deleted);
  } catch (e) {
    console.log(e);
  }
});

router.post("/restaurant/review", authMiddleware, async (req, res) => {
  try {
    //const {title, imageUrl, review, date, stars, userId, restSpaceId} = req.body
    const newReview = await Review.create(req.body);
    const completeReview = await Review.findByPk(newReview.id, {
      include: User,
    });
    res.send(completeReview);
  } catch (e) {
    console.log(e);
  }
});

router.post("/restaurant/photos", authMiddleware, async (req, res) => {
  try {
    //const {title, description, city, imageUrl, hearts, userId, restSpaceId}
    const newPhoto = await Photos.create(req.body);
    res.json(newPhoto);
  } catch (e) {
    console.log(e);
  }
});

router.post("/country/photos", authMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      city,
      imageUrl,
      country,
      userId,
      countrySpaceId,
    } = req.body;
    if (!country) {
      NewPhoto = await Photos.create(req.body);
      res.json(NewPhoto);
    } else {
      newCountry = await Country.create({ name: country });
      newCountrySpaceId = newCountry.id;
      NewPhoto = await Photos.create({
        countrySpaceId: newCountrySpaceId,
        ...req.body,
      });
      const countryComplete = await Country.findByPk(newCountrySpaceId, {
        include: Photos,
      });
      res.json(countryComplete);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
