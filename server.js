const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send(JSON.stringify("Hello World"));
});

app.listen(3000);
console.log("Server is running on http://localhost:3000");
