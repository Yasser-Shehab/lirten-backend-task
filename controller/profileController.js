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

//Get Single Profile
//@REQUEST GET
const getProfile = asyncHandler(async (req, res) => {
  //Validates the Id params before the Query
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      res.status(400);
      throw new Error("Profile not found");
    } else {
      res.status(200).json(profile);
    }
  }
  res.status(400);
  throw new Error("Profile ID format Error");
});

//Get All Profiles
//@REQUEST GET
const getAllProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find({});
  res.status(200).json(profiles);
});
//Delete Profile
//@REQUEST Delete
const deleteProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    res.status(400);
    throw new Error("Profile not found");
  }

  await profile.remove();
  res.status(200).json({ message: "User has been Deleted" });
});

module.exports = {
  createProfile,
  editProfile,
  getProfile,
  getAllProfiles,
  deleteProfile,
};
