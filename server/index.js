const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

/*
 * Define the middleware that our application uses
 * For more information see:
 * - https://expressjs.com/en/advanced/best-practice-security.html
 * - http://expressjs.com/en/advanced/best-practice-performance.html
 */
// Allows us to parse and send json requests
app.use(express.json());
// Allows us to use cross-origin requests
app.use(cors());
// Preventing common security issues e.g. in HTTP headers
app.use(helmet());
// Preventing fingerprinting, increasing security posture
app.disable("x-powered-by");

/*
 * Database connection
 */
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

/*
 * Define our API logic
 */

// TODO Make our routes for this use validation or requests with joi - ideally in a consistent way

const charityRoutes = require("./routes/charity");
app.use("/api/charity", charityRoutes);

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

/*
 * Custom error pages to reduce information leakage and enhance security posture
 */
// Custom 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Connect to our post and open our application up to requests
const PORT = process.env.PORT || 8080;
module.exports = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
