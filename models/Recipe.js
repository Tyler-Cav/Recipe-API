const { Sequelize, DataTypes, Model } = require("sequelize");

class Recipe extends Model {}

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
