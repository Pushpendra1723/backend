const mongoose = require("mongoose");

//Create Schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
  },
});

//Create Models

const User = mongoose.model("User", userSchema);

//Export Models

module.exports = User;
