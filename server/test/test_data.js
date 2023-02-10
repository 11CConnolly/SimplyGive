const { mongo } = require("mongoose");
const { categories } = require("../models/categories");

const CHARITIES_TEST_DATA = [
  {
    name: "BIAS",
    charityNumber: 123456,
    description: "Brent Irish Advisory Service",
    categories: [categories.WELFARE],
  },
  {
    name: "BIAS2",
    charityNumber: 122222,
    description: "Brent Irish Advisory Service 2",
    categories: [categories.WELFARE],
  },
  {
    name: "Mayhew",
    charityNumber: 333333,
    description: "Animal Home NW London",
    categories: [categories.ANIMAL],
  },
  {
    name: "Bob",
    charityNumber: 69420,
    description: "Animal Home NW London",
    categories: [
      categories.ANIMAL,
      categories.CRISIS,
      categories.CULTURAL,
      categories.WELFARE,
      categories.HEALTH,
    ],
  },
];

const USERS_TEST_DATA = [
  {
    name: "Callum",
    email: "callumc11@gmail.com",
  },
  {
    name: "Bob",
    email: "bob@example.com",
  },
  {
    name: "Jim",
    email: "jim@example.com",
  },
];

const DATE_FOR_PAYMENTS = "2023-03-25";
const TODAYS_DATE_IN_YYYY_MM_DD = () => new Date().toISOString().split("T")[0];

const SUBSCRIPTION_TEST_DATA = [
  {
    charity: { id: new mongo.ObjectId(), ...CHARITIES_TEST_DATA[0] },
    user: { id: new mongo.ObjectId(), ...USERS_TEST_DATA[0] },
    subscription: {
      amount: 5.0,
      createdOn: TODAYS_DATE_IN_YYYY_MM_DD(),
      dateToTakePaymentOn: DATE_FOR_PAYMENTS,
      active: true,
    },
  },
];

module.exports = {
  CHARITIES_TEST_DATA,
  USERS_TEST_DATA,
  SUBSCRIPTION_TEST_DATA,
};
