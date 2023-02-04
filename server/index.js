const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Charity = require("./models/charity");
const { categoriesArray } = require("./models/categories");

const app = express();

// Define the middleware for accepting requests
app.use(express.json());
app.use(cors());

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

// Define our API logic
const charityRoutes = require("./routes/charity");
app.use("/api/charity", charityRoutes);

const PORT = process.env.PORT || 8080;

module.exports = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
