const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const multer = require("multer");
const uuidv4 = require("uuid/v4");

const DIR = "./public/images/";

const User = require("../../models/User");
const ChildProfile = require("../../models/ChildProfile");
const UserProfile = require("../../models/UserProfile");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, uuidv4() + "-" + fileName);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});

//@route  POST api/childprofiles
//@description create a child profile
//@access Private
router.post("/", auth, upload.single("img"), async (req, res, next) => {
  try {
    const url = req.protocol + "://" + req.get("host");
    const user = await User.findById(req.user.id).select("-password");

    const newChildProfile = new ChildProfile({
      childName: req.body.childName,
      age: req.body.age,
      gaurdian: req.user.id,
      img: url + "/public/images/" + req.file.filename,
      details: req.body.details,
      city: req.body.city,
      status: req.body.status,
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
