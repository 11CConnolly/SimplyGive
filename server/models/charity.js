const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("Charity", charitySchema);
