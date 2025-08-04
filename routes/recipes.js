const router = require("express").Router();
const { Recipe, Ingredient } = require("../models"); // Import both models

// Get all recipes with their ingredients
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: [
        {
          model: Ingredient,
          as: "ingredients",
        },
      ],
    });
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/add", async (req, res) => {
  const { title, Instructions, ingredients } = req.body;

  // Start a database transaction
  const transaction = await Recipe.sequelize.transaction();

  try {
    // Create the recipe first
    const newRecipe = await Recipe.create(
      {
        title,
        Instructions,
      },
      { transaction }
    );

    // Create ingredients if they were provided
    if (ingredients && Array.isArray(ingredients)) {
      const ingredientPromises = ingredients.map((ingredient) =>
        Ingredient.create(
          {
            ingredientType: ingredient.ingredienType,
            measurement: ingredient.measurement,
            recipeId: newRecipe.id,
          },
          { transaction }
        )
      );

      await Promise.all(ingredientPromises);
    }

    // Commit the transaction
    await transaction.commit();

    // Fetch the complete recipe with ingredients to return
    const completeRecipe = await Recipe.findByPk(newRecipe.id, {
      include: [
        {
          model: Ingredient,
          as: "ingredients",
        },
      ],
    });

    res.status(201).json(completeRecipe);
  } catch (error) {
    // Rollback the transaction on error
    await transaction.rollback();
    console.error("Error adding recipe:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
