const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const User = require("../../models/User");
const ChildProfile = require("../../models/ChildProfile");
const UserProfile = require("../../models/UserProfile");

//@route  POST api/childprofiles
//@description create a child profile
//@access Private
router.post("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const newChildProfile = new ChildProfile({
      childName: req.body.childName,
      age: req.body.age,
      gaurdian: req.user.id,
      img: req.body.img,
      name: req.user.id,
      avatar: user.avatar
    });

    const childprofile = await newChildProfile.save();
    res.json(childprofile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
