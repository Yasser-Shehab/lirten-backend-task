const mongoose = require("mongoose");
const validator = require("validator");

const profileSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Name Field is Required"],
    },

    lastname: {
      type: String,
      required: [true, "Lastname is required"],
    },
    email: {
      type: String,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: "Email is not Valid",
      },
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
