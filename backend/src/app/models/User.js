const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    confirmpassword: {
      type: String,
      require: true,
      min: 6,
    },
    name: {
      type: String,
      require: true,
      max: 50,
    },
    phone: {
      type: String,
      require: true,
      max: 11,
    },
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      require: true,
      max: 50,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
