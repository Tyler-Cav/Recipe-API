const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db_connect");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Instructions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Recipe",
  }
);

module.exports = Recipe;
