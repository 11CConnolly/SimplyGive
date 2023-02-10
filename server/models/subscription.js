const mongoose = require("mongoose");

function validateDate(date) {
  /\d{4}-\d{2}-\d{2}$/.test(date);
}

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  charityId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  dateToTakePayment: {
    type: String,
    required: true,
    validate: { validator: (d) => validateDate(d) },
  },
  createdOn: {
    type: String,
    required: true,
    validate: { validator: (d) => validateDate(d) },
  },
  updatedOn: {
    type: String,
    validate: { validator: (d) => validateDate(d) },
  },
  active: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
