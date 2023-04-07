const express = require("express");
const User = require("../models/user");

const router = express.Router();

/**
 * @method POST
 * @access public
 * @endpoint /api/register/
 * @description Adds a new user with a setup subscription
 **/
router.post("/", async (req, res) => {
  // User properties
  const { name, email } = req.body;

  // Charity properties
  const { categories } = req.body;

  // Subscription properties
  const { amount } = req.body;

  try {
    // Add a new User
    await new User({
      name,
      email,
      subscription: { amount, categories, active: true },
    }).save();

    res.status(201).json({
      status: "Success",
      description: "Registration successful, subscription complete!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

module.exports = router;
