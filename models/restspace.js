"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restSpace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      restSpace.hasMany(models.photos);
      restSpace.hasMany(models.reviews);
      restSpace.belongsTo(models.user);
      restSpace.belongsToMany(models.user, {
        through: "favoriteRestaurants",
        foreignKey: "restSpaceId",
      });
      restSpace.belongsToMany(models.category, {
        through: "restCategories",
        foreignKey: "restSpaceId",
      });
    }
  }
  restSpace.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      logo: DataTypes.STRING,
      photo: DataTypes.STRING,
      phone: DataTypes.STRING,
      website: DataTypes.STRING,
      openingH: DataTypes.STRING,
      verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "restSpace",
    }
  );
  return restSpace;
};
