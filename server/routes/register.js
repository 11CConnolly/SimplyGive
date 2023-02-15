const express = require("express");
const User = require("../models/user");
const Charity = require("../models/charity");
const Subscription = require("../models/subscription");

const router = express.Router();

/**
 * @method POST
 * @access public
 * @endpoint /api/register/
 * @description Adds a new user and returns their subscription once
 **/
router.post("/", async (req, res) => {
  // User properties
  const { name, email } = req.body;
  // Charity properties
  const { categories } = req.body;
  // Subscription properties
  const { amount, dateToTakePayment } = req.body;

  try {
    // Add a new User
    const user = new User({ name, email });
    const newUser = await user.save();

    // Then get a charity that we want
    const charities = await Charity.find({
      categories: { $in: categories },
    });

    // Pick a random charity from the list of charities
    const charity = charities[Math.floor(Math.random() * charities.length)];

    // Finally create our subscription
    const subscription = new Subscription({
      userId: newUser.id,
      charityId: charity.id,
      amount,
      dateToTakePayment,
      active: true,
    });
    const newSubscription = await subscription.save();

    res.status(201).json({
      status: "Success",
      description: "Registration successful, subscription complete!",
      subscription: newSubscription,
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
