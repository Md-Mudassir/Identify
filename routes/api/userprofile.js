const express = require("express");
const router = express.Router();
const UserProfile = require("../../models/UserProfile");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

//@route  GET api/userprofile/me
//@desctiption Get current user's profile
//@access Public

router.get("/me", auth, async (req, res) => {
  try {
    const userprofile = await UserProfile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);
    if (!userprofile) {
      return res.status(400).json({ msg: "User profile not found" });
    }
    res.json(userprofile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route  POST api/userprofile
//@desctiption create or update user's profile
//@access Private
router.post(
  "/",
  auth,
  [
    check("adhaarNo", "Adhaar Number is required")
      .not()
      .isEmpty(),
    check("phone", "Phone number is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { adhaarNo, phone, address } = req.body;

    //Build profile
    const profileFields = {};
    profileFields.user = req.user.id;
    if (adhaarNo) profileFields.adhaarNo = adhaarNo;
    if (address) profileFields.address = address;
    if (phone) profileFields.phone = phone;

    try {
      let userprofile = await UserProfile.findOne({ user: req.user.id });
      if (userprofile) {
        userprofile = await UserProfile.findOneAndUpdate(
          { user: req.user.id },
          {
            $set: profileFields
          },
          { new: true }
        );
        return res.json(userprofile);
      }

      //If not found then Create
      userprofile = new UserProfile(profileFields);
      await userprofile.save();
      res.json(userprofile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route  GET api/userprofile
//@desctiption Get all user profiles
//@access Public
router.get("/", async (req, res) => {
  try {
    const userprofiles = await UserProfile.find().populate("user", [
      "name",
      "avatar"
    ]);
    res.json(userprofiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
