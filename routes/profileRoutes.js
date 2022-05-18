const express = require("express");
const profileRouter = express.Router();
const {
  createProfile,
  editProfile,
  getProfile,
  getAllProfiles,
  deleteProfile,
} = require("../controller/profileController");

profileRouter.post("/", createProfile);
profileRouter.get("/all", getAllProfiles);
profileRouter.get("/:id", getProfile);
profileRouter.put("/:id", editProfile);
profileRouter.delete("/:id", deleteProfile);

module.exports = { profileRouter };
