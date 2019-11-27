const express = require("express");
const router = express.Router();

//@route  POST api/users
//description Register a user
//@access Public
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("user route");
});

module.exports = router;
