const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
//route POST api/users
// desc Register User

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please Include a valid email address").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more character"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
    // See if users Exist

    // Get User Gravatar

    //Encrypt Password

    //Return jsonWebToken

    res.send("User Route");
  }
);
module.exports = router;
