"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favoritephoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favoritephoto.belongsTo(models.user);
      favoritephoto.belongsTo(models.photos);
    }
  }
  favoritephoto.init(
    {
      userId: DataTypes.INTEGER,
      photosId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favoritephoto",
    }
  );
  return favoritephoto;
};
