const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

// Our instance of MongoDB Server if running with test and Mongo Memory Server
let mongo = undefined;

// Our DB String either live or mocked
let db_string = undefined;

const setupDBConnection = async () => {
  // Our custom print function depending on setup
  let printFunc = undefined;

  if (process.env.NODE_ENV === "production") {
    // Setup for production, connecting to LIVE DB
    db_string = process.env.LIVE_DB_STRING;

    printFunc = "Connected to LIVE Database in PRODUCTION";
  } else if (process.env.NODE_ENV === "development") {
    // Setup for development, connecting to LIVE DB
    require("dotenv").config();

    db_string = process.env.LIVE_DB_STRING;
    printFunc = "Connected to LIVE Database in DEVELOPMENT";
  } else if (process.env.NODE_ENV === "test") {
    // Setup for testing, connecting to Memory DB
    mongo = await MongoMemoryServer.create();
    db_string = mongo.getUri();

    printFunc = "Connected to LIVE Database in DEVELOPMENT";
  }

  mongoose.set("strictQuery", true);

  mongoose
    .connect(db_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(printFunc));
};

const dropTestDB = async () => {
  if (process.env.NODE_ENV === "test") {
    await mongoose.disconnect();
    await mongo.stop();
  }
};

module.exports = { setupDBConnection, dropTestDB };
