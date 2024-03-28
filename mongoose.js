const mongoose = require("mongoose");
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error in connnecting db", err);
});

db.once("open", () => {
  console.log("Connected to db ");
});

module.exports = db;
