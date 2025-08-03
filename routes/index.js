const router = require("express").Router();
const recipeRoutes = require("./recipes");

router.use("/recipes", recipeRoutes);

router.use("/", (req, res) => {
  res.send("Welcome to the Recipe API");
});

module.exports = router;
