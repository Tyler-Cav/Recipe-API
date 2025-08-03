const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize, testConnection } = require("./db_connect");
const Recipe = require("./models/Recipe"); // Import the Recipe model
const routes = require("./routes"); // Import routes

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

app.get("/", (req, res) => {
  res.send(
    JSON.stringify(
      "Hello, please use the /recipes endpoint to interact with the Recipe API"
    )
  );
});

app.use(routes);

// Start server after testing database connection
const startServer = async () => {
  try {
    await testConnection(); // Test DB connection once at startup
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (error) {
    console.error(
      "Failed to start server due to database connection error:",
      error
    );
    process.exit(1);
  }
};

startServer();
