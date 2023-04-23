const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");

const User = require("../models/user");
const mail = require("../services/mail/mailer");

/**
 * @method POST
 * @access public
 * @endpoint /api/register/
 * @description Adds a new user with a setup subscription
 **/
router.post("/", async (req, res) => {
  // User properties
  const { name, email } = req.body;

  // Subscription properties
  const { categories, amount } = req.body;

  try {
    await new User({
      name,
      email,
      subscription: { amount, categories, active: true },
    }).save();

    // TODO This should be in a separate service. If the email fails, I still want to acknowledge that the
    // TODO sign up was successful on the FE.

    res.status(201).json({
      status: "Success",
      description: "Registration successful, subscription complete!",
    });

    await mail([name, email, categories, amount].toString()).catch(
      console.error
    );
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({
        description: "Invalid input, object invalid",
        message: err,
      });
    } else if (err.code === 11000) {
      // If error code is caused by duplicated key from MongoDB Schema Violation
      res.status(422).json({
        description: "Email already in use!",
        message: err,
      });
    } else {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  }
});

module.exports = router;
