const mongoose = require("mongoose");
const { validateDate, TODAYS_DATE_IN_YYYY_MM_DD } = require("./utils/dates");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  donations: {
    type: [
      {
        charity: {
          type: String,
          required: true,
        },
        datePaymentTakenOn: {
          type: String,
          required: true,
          default: TODAYS_DATE_IN_YYYY_MM_DD(),
          validate: { validator: (d) => validateDate(d) },
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
