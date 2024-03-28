// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
