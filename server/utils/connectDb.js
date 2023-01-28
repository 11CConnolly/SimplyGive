const mongoose = require("mongoose");

const connection_string =
  "mongodb+srv://callum001:VgNxBSoA0dQFnA9K@cluster0.uffmeex.mongodb.net/?retryWrites=true&w=majority";

const dbConnect = () => {
  mongoose.set("strictQuery", true);

  mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
};

const dbClose = () => {
  return mongoose.disconnect();
};

module.exports = { dbConnect, dbClose };
