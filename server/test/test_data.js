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

module.exports = { CHARITIES_TEST_DATA, USERS_TEST_DATA };
