const router = require("express").Router();
const Recipe = require("../models/Recipe"); // Import the Recipe model

// Get all recipes
router.get("/get-all", async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/add", async (req, res) => {
  const { title, Ingredients, Instructions } = req.body;

  try {
    const newRecipe = await Recipe.create({
      title,
      Ingredients,
      Instructions,
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error("Error adding recipe:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
