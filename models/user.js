"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
      user.hasMany(models.photos, { foreignKey: "userId", as: "photos" });
      user.hasMany(models.reviews);
      user.hasMany(models.restSpace);
      user.belongsToMany(models.restSpace, {
        through: "favoriteRestaurants",
        foreignKey: "userId",
      });
      user.belongsToMany(models.photos, {
        through: "favoritephotos",
        foreignKey: "userId",
        as: "fav",
      });
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      restaurant: { type: DataTypes.BOOLEAN, defaultValue: false },
      darkKitchen: { type: DataTypes.BOOLEAN, defaultValue: false },
      country: { type: DataTypes.STRING, allowNull: false },
      isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
