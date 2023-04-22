const express = require("express");
const User = require("../models/user");
const mongoose = require("mongoose");

const router = express.Router();
const nodemailer = require("nodemailer");

const mail = async (content) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "stefan.murray26@ethereal.email",
      pass: "dY1myRauBaZnqc4TuQ",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: { content }, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

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

  await mail(name).catch(console.error);

  res.status(500);

  try {
    await new User({
      name,
      email,
      subscription: { amount, categories, active: true },
    }).save();

    console.log(email);

    res.status(201).json({
      status: "Success",
      description: "Registration successful, subscription complete!",
    });
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
