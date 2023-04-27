const expect = require("chai").expect;
const request = require("supertest");
const {
  REGISTER_TEST_DATA,
  CreateMock_RegisterObject,
} = require("./test_data");

// Import our setup
const app = require("../index");
const { dropTestDB, setupDBConnection } = require("../config/db.config");

// Import our schemas
const Charity = require("../models/charitySchema");
const User = require("../models/userSchema");

describe("API Tests", function () {
  before(async function () {
    await setupDBConnection();
    await User.deleteMany({});
    await Charity.deleteMany({});
  });

  after(async function () {
    // Close down our connection to our mock DB
    await dropTestDB();
  });

  describe("api/register/user", function () {
    const existingRegisterObject = CreateMock_RegisterObject();

    describe("Person attempting to create a new subscription", function () {
      before(async function () {
        const { name, email, amount, categories } = existingRegisterObject;

        await User.create({
          name,
          email,
          subscription: { amount, categories, active: true },
        });

        console.log("Created new user");
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

// describe("/api/subscriptions", function () {
//   describe("Receive Mandate to activate a subscription"),
//     function () {
//       before(async function () {
//         const { name, email, amount, categories } = REGISTER_TEST_DATA[1];

//         await User.create({
//           name,
//           email,
//           subscription: { amount, categories, active: true },
//         });

//         console.log("Created new user");
//       });

//       it("Should be able to activate a subscription from a received mandate");
//     };
// });
