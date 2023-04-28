const User = require("../models/userSchema");
const Charity = require("../models/charitySchema");
const { TODAYS_DATE_IN_YYYY_MM_DD } = require("../models/utils/dates");
const { mail, mailTemplates } = require("../services/mail/mailer");

const subscriptionController = {};

subscriptionController.ReceiveMandate = async (req, res) => {
  try {
    // Destruct out mandate object
    const { id } = req.body;

    // Find the particular user associated with that mandate
    const query = { "subscription.mandateID": id };

    await User.findOneAndUpdate(
      query,
      {
        $set: {
          "subscription.active": true,
        },
      },
      { new: true }
    );

    res.status(200);
  } catch (err) {
    console.log(err);
  }
};

subscriptionController.ReceiveDonation = async (req, res) => {
  try {
    const { id, amount } = req.body;

    // Find the particular user associated with that mandate id
    const query = { "subscription.mandateID": id };

    const user = await User.findOne(query);

    console.log(user);

    // Find a charity in the list of the users causes

    // TODO Assuming that there is a chosen charity in the pool
    const selectedCharity = await Charity.find({
      categories: { $in: user.subscription.categories },
      isInMonthlyPool: true,
    }).limit(1);

    const donationContent = {
      amount,
      charityName: selectedCharity[0].charityName,
      datePaymentTakenOn: TODAYS_DATE_IN_YYYY_MM_DD(),
    };

    // Need to update this with a mongo query
    const newUser = await User.findOneAndUpdate(
      { _id: user._id },
      {
        $push: { donations: donationContent },
      },
      { new: true }
    ).lean();

    console.log(newUser);

    // Send user the email with the template
    // mail(mailTemplates.DONATION, donationContent);

    res.status(200);
  } catch (err) {
    // Send the user an email that something went wrong
    console.log(err);
  }
};

module.exports = subscriptionController;
