const mongoose = require("mongoose");
const { categoriesArray } = require("./categories");

const charitySchema = new mongoose.Schema({
  name: {
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
  },
  categories: {
    type: categoriesArray,
    required: true,
  },
});

module.exports = mongoose.model("Charity", charitySchema);
