"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favoriteRestaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favoriteRestaurant.belongsTo(models.user);
      favoriteRestaurant.belongsTo(models.restSpace);
    }
  }
  favoriteRestaurant.init(
    {
      userId: DataTypes.INTEGER,
      restSpaceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favoriteRestaurant",
    }
  );
  return favoriteRestaurant;
};
