const express = require("express");
const profileRouter = express.Router();
const { createProfile, editProfile, getProfile } = require("../controller/profileController");

profileRouter.post("/", createProfile);
profileRouter.get("/:id", getProfile);
profileRouter.put("/:id", editProfile);

module.exports = { profileRouter };
