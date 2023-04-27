require("dotenv").config();
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

// Our instance of MongoDB Server if running with test and Mongo Memory Server
let mongo = undefined;

// Our DB String either live or mocked
let db_string = undefined;

const setupDBConnection = async () => {
  // Our custom print function depending on setup
  let connection_log = undefined;

  if (process.env.NODE_ENV === "production") {
    db_string = process.env.LIVE_DB_STRING;

    connection_log = "Connected to LIVE Database in PRODUCTION";
  } else if (process.env.NODE_ENV === "development") {
    db_string = process.env.LIVE_DB_STRING;

    connection_log = "Connected to LIVE Database in DEVELOPMENT";
  } else if (process.env.NODE_ENV === "test") {
    mongo = await MongoMemoryServer.create();
    db_string = mongo.getUri();

    connection_log = "Connected to MOCK Database in TEST";
  }

  mongoose.set("strictQuery", true);

  mongoose
    .connect(db_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(connection_log));
};

const dropTestDB = async () => {
  if (process.env.NODE_ENV === "test") {
    await mongoose.disconnect();
    await mongo.stop();
  }
};

module.exports = { setupDBConnection, dropTestDB };
