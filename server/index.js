const express = require("express");
const mongoose = require("mongoose");
const Charity = require("./models/charity");

const app = express();

// Define the middleware for accepting requests
app.use(express.json());

// Connect to DB
const live_db_string =
  "mongodb+srv://callum001:VgNxBSoA0dQFnA9K@cluster0.uffmeex.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(live_db_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Database"));
}

const save = async (params) => {
  const charity = new Charity({ ...params });
  await charity.save();
};

// Define our API logic
app.post("/api/charity", async (req, res) => {
  try {
    await save(req.body);
    res.status(201).json({
      status: "Success",
      description: "charity created",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

const PORT = process.env.PORT || 8080;

module.exports = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
