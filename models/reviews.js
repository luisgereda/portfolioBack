"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reviews.belongsTo(models.user);
      reviews.belongsTo(models.restSpace);
    }
  }
  reviews.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      review: { type: DataTypes.TEXT, allowNull: false },
      date: { type: DataTypes.STRING, allowNull: false },
      imageUrl: DataTypes.STRING,
      stars: { type: DataTypes.INTEGER, allowNull: false },
      userId: DataTypes.INTEGER,
      restSpaceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "reviews",
    }
  );
  return reviews;
};
