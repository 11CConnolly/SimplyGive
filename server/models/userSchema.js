const mongoose = require("mongoose");
const { categoriesArray } = require("./categories");
const { validateDate, TODAYS_DATE_IN_YYYY_MM_DD } = require("./utils/dates");

const subscriptionSchema = new mongoose.Schema({
  mandateID: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
  },
  categories: {
    type: categoriesArray,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const donationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  charityName: {
    type: String,
    required: true,
  },
  datePaymentTakenOn: {
    type: String,
    required: true,
    default: TODAYS_DATE_IN_YYYY_MM_DD(),
    validate: { validator: (d) => validateDate(d) },
  },
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  subscription: {
    type: subscriptionSchema,
    required: true,
  },
  donations: {
    type: [donationSchema],
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
