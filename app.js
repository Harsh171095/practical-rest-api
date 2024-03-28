require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./mongoose");

db;

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require("./routes/user.routes");
app.use("/v1/api", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
