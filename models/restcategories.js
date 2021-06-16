"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      restCategories.belongsTo(models.restSpace);
      restCategories.belongsTo(models.category);
    }
  }
  restCategories.init(
    {
      restSpaceId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "restCategories",
    }
  );
  return restCategories;
};
