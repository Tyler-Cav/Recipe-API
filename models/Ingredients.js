const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db_connect");

class Ingredient extends Model {}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredientType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Recipes",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Ingredient",
    timestamps: false, // Disable createdAt and updatedAt
  }
);

module.exports = Ingredient;
