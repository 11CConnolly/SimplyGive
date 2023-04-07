const mongoose = require("mongoose");
const { categoriesArray } = require("./categories");
const { validateDate, TODAYS_DATE_IN_YYYY_MM_DD } = require("./utils/dates");

const charitySchema = new mongoose.Schema({
  charityName: {
    type: String,
    required: true,
    unique: true,
  },
  charityNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: {
    type: categoriesArray,
    required: true,
  },
  recentNews: String,
  recentNewsUpdateDate: {
    type: String,
    default: TODAYS_DATE_IN_YYYY_MM_DD(),
    validate: { validator: (d) => validateDate(d) },
  },
});

module.exports = mongoose.model("Charity", charitySchema);
