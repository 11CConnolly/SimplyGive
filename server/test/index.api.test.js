const expect = require("chai").expect;
const request = require("supertest");
const mongoose = require("mongoose");
const TEST_DATA = require("./test_data");
const { MongoMemoryServer } = require("mongodb-memory-server");

// Import our app
const app = require("../index");

// Import our schemas
const Charity = require("../models/charity");

// Mock our DB connection
let mongo = null;

const connectDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const dropDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase(),
      await mongoose.connection.close(),
      await mongo.stop();
  }
};

describe("API Tests", function () {
  before(async () => {
    await connectDB();
    await Charity.deleteMany({});
  });

  after(async () => {
    await mongoose.disconnect();
    await mongo.stop();
  });

  describe("Charities", function () {
    describe("/api/charity", function () {
      beforeEach((done) => {
        Charity.deleteMany({});
        done();
      });

      it("Should be able to add a single Charity", (done) => {
        request(app)
          .post("/api/charity")
          .send(TEST_DATA[0])
          .expect(201)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body.description).to.be.eql("charity created");

            const checkDb = Charity.find({ ...TEST_DATA[0] });
            expect(checkDb).to.not.be.eql(null);
            done();
          });
      });
    });
  });
});
