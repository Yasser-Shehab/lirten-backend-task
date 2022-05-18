const Profile = require("../model/Profile");
const asyncHandler = require("express-async-handler");

//Create Profile
//@REQUEST POST
const createProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.create(req.body);
  res.send(profile);
});

module.exports = {
  createProfile,
  editProfile,
  getProfile,
  getAllProfiles,
};
