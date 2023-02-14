const mongoose = require("mongoose");

const validateDate = (date) => /\d{4}-\d{2}-\d{2}$/.test(date);

const TODAYS_DATE_IN_YYYY_MM_DD = () => new Date().toISOString().split("T")[0];

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
    default: TODAYS_DATE_IN_YYYY_MM_DD(),
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
