const User = require("../models/userSchema");

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

module.exports = subscriptionController;
