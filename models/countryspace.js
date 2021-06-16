"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class countrySpace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      countrySpace.hasMany(models.photos);
    }
  }
  countrySpace.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "countrySpace",
    }
  );
  return countrySpace;
};
