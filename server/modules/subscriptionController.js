const User = require("../models/userSchema");

const subscriptionController = {};

subscriptionController.ReceiveMandate = async (req, res) => {
  try {
    // Destruct out mandate object
    const { id } = req.body;

    // Find the particular user associated with that mandate
    const query = { "subscription.mandateID": id };

    const user = await User.findOneAndUpdate({
      query,
      "subscription.mandateID": true,
    }).lean();

    res.status(200).json({
      ...user,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = subscriptionController;
