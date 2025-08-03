const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize, testConnection } = require("./db_connect");
const Recipe = require("./models/Recipe"); // Import the Recipe model

app.use(cors());

app.get("/", (req, res) => {
  res.send(JSON.stringify("Hello World"));
});

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
