const { user, restSpace, reviews, category, photos } = require("./models");
//const User = require("./models").user;

async function getUsersfavorite() {
  const allUsers = await user.findAll({ include: { model: restSpace } });

  return allUsers.map((list) => list.get({ plain: true }));
}

//getUsersfavorite().then((lists) => console.log(lists));

async function getUsers() {
  const list = await user.findAll({ include: { model: reviews } });

  return list.map((list) => list.get({ plain: true }));
}

//getUsers().then((lists) => console.log(lists));

async function restSpaces() {
  const rest = await restSpace.findAll({ include: { model: category } });

  return rest.map((list) => list.get({ plain: true }));
}

//restSpaces().then((lists) => console.log(lists));

async function restSpacesP() {
  const rest = await restSpace.findAll({ include: { model: photos } });

  return rest.map((list) => list.get({ plain: true }));
}

restSpacesP().then((lists) => console.log(lists));
