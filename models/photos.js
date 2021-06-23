"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      photos.belongsTo(models.user);
      photos.belongsTo(models.restSpace);
      photos.belongsTo(models.countrySpace);
      photos.belongsToMany(models.user, {
        through: "favoritephotos",
        foreignKey: "photosId",
      });
    }
  }
  photos.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      city: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      hearts: { type: DataTypes.INTEGER, defaultValue: 0 },
      userId: DataTypes.INTEGER,
      restSpaceId: DataTypes.INTEGER,
      countrySpaceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "photos",
    }
  );
  return photos;
};
