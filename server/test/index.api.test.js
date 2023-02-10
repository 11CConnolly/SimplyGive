const expect = require("chai").expect;
const request = require("supertest");
const mongoose = require("mongoose");
const {
  CHARITIES_TEST_DATA,
  USERS_TEST_DATA,
  SUBSCRIPTION_TEST_DATA,
} = require("./test_data");
const { MongoMemoryServer } = require("mongodb-memory-server");

// Import our app
const app = require("../index");

// Import our schemas
const Charity = require("../models/charity");
const User = require("../models/user");
const Subscription = require("../models/subscription");

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
    await mongoose.disconnect();
    await mongo.stop();
  });

  afterEach(async function () {
    await User.deleteMany({});
    await Charity.deleteMany({});
  });

  describe("Charities", function () {
    describe("/api/charity", function () {
      // Delete all the data and add in a single Bob
      beforeEach(async function () {
        await Charity.deleteMany({});
        await Charity.create(CHARITIES_TEST_DATA[1]);
        await Charity.create(CHARITIES_TEST_DATA[2]);
        await Charity.create(CHARITIES_TEST_DATA[3]);
      });

      it("Should be able to add a single Charity", (done) => {
        request(app)
          .post("/api/charity")
          .send(CHARITIES_TEST_DATA[0])
          .expect(201)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("charity created");

            done();
          });
      });

      it("Should be return an Bad Request with an improper input", (done) => {
        request(app)
          .post("/api/charity")
          .send({ invalid: "property" })
          .expect(400)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("invalid input, object invalid");

            done();
          });
      });

      it("Should be return an error when trying to save the same charity", (done) => {
        request(app)
          .post("/api/charity")
          .send(CHARITIES_TEST_DATA[3])
          .expect(500)
          .end(function (err, res) {
            if (err) throw err;
            done();
          });
      });

      it("Should be able to get a list of all Charities", (done) => {
        request(app)
          .get("/api/charity")
          .send({})
          .expect(200)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("all charities in database");

            expect(res.body)
              .to.have.property("charities")
              .to.have.property("length")
              .to.be.eql(3);

            done();
          });
      });

      it("Should be able to get a list of all Charities by single category", (done) => {
        request(app)
          .post("/api/charity/findByCategory")
          .send({
            categories: [categories.ANIMAL],
          })
          .expect(200)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("Successful operation");

            expect(res.body)
              .to.have.property("charities")
              .to.have.property("length")
              .to.be.eql(2);

            done();
          });
      });

      it("Should be able to get a list of all Charities by multiple categories", (done) => {
        request(app)
          .post("/api/charity/findByCategory")
          .send({
            categories: [categories.ANIMAL, categories.WELFARE],
          })
          .expect(200)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("Successful operation");

            expect(res.body)
              .to.have.property("charities")
              .to.have.property("length")
              .to.be.eql(3);

            done();
          });
      });

      it("Should be able to get a list single charity from a list of categories", (done) => {
        request(app)
          .post("/api/charity/findSingleByCategory")
          .send({
            categories: [categories.ANIMAL, categories.WELFARE],
          })
          .expect(200)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("Successful operation");

            expect(res.body).to.have.property("charity");

            done();
          });
      });
    });
  });

  describe("Users", function () {
    describe("/api/user", function () {
      beforeEach(async function () {
        await User.deleteMany({});
        await User.create(USERS_TEST_DATA[0]);
        await User.create(USERS_TEST_DATA[1]);
      });

      it("Should be able to add a single User", (done) => {
        request(app)
          .post("/api/user")
          .send(USERS_TEST_DATA[2])
          .expect(201)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("User added");

            done();
          });
      });

      it("Should be return a 400 error with an improper request to create a new User", (done) => {
        request(app)
          .post("/api/user")
          .send({})
          .expect(400)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("invalid input, object invalid");

            done();
          });
      });

      it("Should return a 422 error when trying to add the same email", (done) => {
        request(app)
          .post("/api/user")
          .send(USERS_TEST_DATA[0])
          .expect(422)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("email already in use");

            done();
          });
      });

      it("Should return a list of all users", (done) => {
        request(app)
          .get("/api/user")
          .expect(200)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("all users in database");

            expect(res.body)
              .to.have.property("users")
              .to.have.property("length")
              .to.be.eql(2);

            done();
          });
      });
    });
  });

  describe("Subscriptions", function () {
    describe("/api/subscription", function () {
      // Add some data before for our subscription to be able to reference
      before(async function () {
        // Add in a charity and user with Object ID's we can reference
        await Charity.create(SUBSCRIPTION_TEST_DATA[0].charity);
        await User.create(SUBSCRIPTION_TEST_DATA[0].user);
      });

      // Delete all the data and add in a single Bob
      beforeEach(async function () {
        await Subscription.deleteMany({});
      });

      it("Should be able to add a single Subscription", (done) => {
        request(app)
          .post("/api/subscription")
          .send({
            charityId: SUBSCRIPTION_TEST_DATA[0].charity.id,
            userId: SUBSCRIPTION_TEST_DATA[0].user.id,
            ...SUBSCRIPTION_TEST_DATA[0].subscription,
          })
          .expect(201)
          .end(function (err, res) {
            if (err) throw err;

            expect(res.body)
              .to.have.property("description")
              .to.be.eql("Subscription added");

            done();
          });
      });
    });
  });
});
