const Profile = require("../model/Profile");
const asyncHandler = require("express-async-handler");

//Create Profile
//@REQUEST POST
const createProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.create(req.body);
  res.send(profile);
});
//Edit Profile
//@REQUEST PUT
const editProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    res.status(400);
    throw new Error("Profile not found");
  }
  const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedProfile);
});

module.exports = {
  createProfile,
  editProfile,
  getProfile,
  getAllProfiles,
};
