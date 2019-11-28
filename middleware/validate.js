const { check, validationResult } = require("express-validator");
const uservalidate = [
  check("name", "Name is required")
    .not()
    .isEmpty(),
  check("email", "Enter a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 })
];

module.exports = uservalidate;
