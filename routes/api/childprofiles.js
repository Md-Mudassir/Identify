const express = require("express");
const router = express.Router();

//@route  GET api/childprofiles
//@access Public
router.get("/", (req, res) => res.send("child profiless route"));

module.exports = router;
