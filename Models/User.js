// Models/User.js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    dob: String,
    email: String,
    fullname: String,
    pass: String,
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "users",
  },
);

const User = model("User", userSchema);

module.exports = User;
