const Recipe = require("./Recipe");
const Ingredient = require("./Ingredients");

Recipe.hasMany(Ingredient, {
  foreignKey: "recipeId",
  as: "ingredients",
});

Ingredient.belongsTo(Recipe, {
  foreignKey: "recipeId",
  as: "recipe",
});

module.exports = {
  Recipe,
  Ingredient,
};
