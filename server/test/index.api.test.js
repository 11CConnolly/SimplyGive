const expect = require("chai").expect;
const co = require("co");
const request = require("supertest");
const {
  CreateMock_RegisterObject,
  CreateMock_UserObject,
} = require("./test_data");

// Import our setup
const app = require("../index");
const { dropTestDB, setupDBConnection } = require("../config/db.config");

// Import our schemas
const Charity = require("../models/charitySchema");
const User = require("../models/userSchema");

before(async function () {
  await setupDBConnection();
});

after(async function () {
  // Close down our connection to our mock DB
  await dropTestDB();
});

describe("API Tests", function () {
  after(async function () {
    await User.deleteMany({});
    await Charity.deleteMany({});

    describe("api/register/user", function () {
      describe("Person attempting to create a new subscription", function () {
        // Define our existing registering user
        const existingRegisterObject = CreateMock_RegisterObject();

        before(async function () {
          const { name, email, amount, categories } = existingRegisterObject;

          await User.create({
            name,
            email,
            subscription: { amount, categories, active: true },
          });
        });

        it("Should be able to register and setup a single Subscription", (done) => {
          request(app)
            .post("/api/register")
            .send(CreateMock_RegisterObject())
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
            .send({ ...CreateMock_RegisterObject(), name: null, email: null })
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
            .send({ ...existingRegisterObject })
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

  describe("/api/subscriptions", function () {
    describe("Receive Mandate to activate a subscription", function () {
      let userTemplate;
      let userInstance;

      before(async function () {
        userTemplate = CreateMock_UserObject();
        userTemplate.subscription.active = false;

        userInstance = await User.create({
          ...userTemplate,
        });
      });

      it("Should be able to activate a subscription from a received mandate", (done) => {
        request(app)
          .post("/api/subscriptions/receiveMandate")
          .send({ id: userTemplate.subscription.mandateID })
          .expect(200)
          .end(done());
      });

      // TODO Move to integration test
      // it("Should be able to activate a subscription from a received mandate", () => {
      //   request(app)
      //     .post("/api/subscriptions/receiveMandate")
      //     .send({ id: userTemplate.subscription.mandateID })
      //     .expect(200)
      //     .end(async (err, res) => {
      //       if (err) throw err;

      //       const user = await User.findOne({ email: userTemplate.email });

      //       expect(user.subscription.active).to.be.true;
      //     });
      // });
    });
  });
});
