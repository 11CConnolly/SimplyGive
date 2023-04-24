const mongoose = require("mongoose");

const User = require("../models/user");
const { mailTemplates, mail } = require("../services/mail/mailer");

const registerController = {};

registerController.RegisterUser = async (req, res) => {
  try {
    const { name, email, categories, amount } = req.body;

    await new User({
      name,
      email,
      subscription: { amount, categories, active: true },
    }).save();

    await mail(
      mailTemplates.SIGNUP,
      [name, email, categories, amount].toString()
    ).catch((err) => console.log(err));

    res.status(201).json({
      status: "Success",
      description: "Registration successful, subscription complete!",
    });
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      // Error in validation e.g. null values
      return res.status(400).json({
        description: "Invalid input, object invalid",
        message: err,
      });
    } else if (err.code === 11000) {
      // If error code is caused by duplicated key from MongoDB Schema Violation
      return res.status(422).json({
        description: "Email already in use!",
        message: err,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  }
};

module.exports = registerController;
