const mongoose = require("mongoose");
const categories = require("./categories");

const categoriesArray = Object.keys(categories);

const charitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
