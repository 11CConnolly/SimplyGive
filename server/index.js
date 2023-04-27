const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");

const { setupDBConnection } = require("./config/db.config");

const app = express();

/*
 * Define the middleware that our application uses
 * For more information see:
 * - https://expressjs.com/en/advanced/best-practice-security.html
 * - http://expressjs.com/en/advanced/best-practice-performance.html
 */
// Allows us to parse and send json requests
app.use(express.json({ limit: "50mb" }));
// Allows us to use cross-origin requests
app.use(cors());
// Preventing common security issues e.g. in HTTP headers
app.use(helmet());
// Preventing fingerprinting, increasing security posture.
app.disable("x-powered-by");
// protect against HTTP Parameter Pollution attacks
app.use(hpp());

// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["SECRECTKEY"],
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );

// app.use(cookieParser());

/*
 * Database connection
 */
const connectToDB = async () => {
  await setupDBConnection();
};

connectToDB();

/*
 * Define our API logic
 */

// TODO Make our routes for this use validation or requests with joi - ideally in a consistent way
const registerRoutes = require("./routes/register");
app.use("/api/register", registerRoutes);

const subscriptionRoutes = require("./routes/subscriptions");
app.use("/api/subscriptions", subscriptionRoutes);

/*
 * Custom error pages to reduce information leakage and enhance security posture
 */
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Connect to our post and open our application up to requests
const PORT = process.env.PORT || 8080;

module.exports = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
// .close( async (err) => {
//   console.log("Server closing");

//   // Close down our DB Connections
//   await mongoose.disconnect();

//   // Exit with a status code
//   process.exit(err ? 1 : 0);
// });
