const expect = require("chai").expect;
const request = require("supertest");
const mongoose = require("mongoose");
const { CHARITIES_TEST_DATA, REGISTER_TEST_DATA } = require("./test_data");
const { MongoMemoryServer } = require("mongodb-memory-server");

// Import our app
const app = require("../index");

// Import our schemas
const Charity = require("../models/charity");
const User = require("../models/user");

// Import constants
const { categories } = require("../models/categories");

// Mock our DB connection
let mongo = null;

const connectDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  mongoose.set("strictQuery", true);

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

describe("API Tests", function () {
  before(async function () {
    await connectDB();
    await Charity.deleteMany({});
    await User.deleteMany({});
  });

  after(async function () {
    // Close down our connection to our mock DB
    await mongoose.disconnect();
    await mongo.stop();
  });

  describe("Register User", function () {
    describe("Person attempting to create a new subscription", function () {
      before(async function () {
        const { name, email, amount, categories } = REGISTER_TEST_DATA[1];

        await User.create({
          name,
          email,
          subscription: { amount, categories, active: true },
        });
      });

      it("Should be able to register and setup a single Subscription", (done) => {
        request(app)
          .post("/api/register")
          .send({ ...REGISTER_TEST_DATA[0] })
          .expect(201)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("Registration successful, subscription complete!");

            done();
          });
      });

      it("Should reject the setup for a malformed subscription", (done) => {
        request(app)
          .post("/api/register")
          .send({ ...REGISTER_TEST_DATA[0], name: null, email: null })
          .expect(400)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("Invalid input, object invalid");

            done();
          });
      });

      it("Should not let me register if the email already exists", (done) => {
        request(app)
          .post("/api/register")
          .send({ ...REGISTER_TEST_DATA[1] })
          .expect(422)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("Email already in use!");

            done();
          });
      });
    });
  });
});
