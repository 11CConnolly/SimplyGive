const express = require("express");
const mongoose = require("mongoose");
const Charity = require("./models/charity");

const app = express();

// Define the middleware for accepting requests
app.use(express.json());

// Connect to our database
const DB =
  "mongodb+srv://callum001:VgNxBSoA0dQFnA9K@cluster0.uffmeex.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfully");
  });

// Define our API Routes

const save = async (params) => {
  const charity = new Charity({ ...params });
  await charity.save();
};

const PORT = process.env.PORT || "8080";

module.exports = app.listen(PORT, () =>
  console.log(`Listening on Port ${PORT}`)
);
