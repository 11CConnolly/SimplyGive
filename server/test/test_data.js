const { categories } = require("../models/categories");

const REGISTER_TEST_DATA = [
  {
    email: "callumc11@gmail.com",
    name: "Callum",
    categories: [categories.WELFARE, categories.CRISIS],
    amount: 5.0,
  },
  {
    email: "bob@example.com",
    name: "Bob",
    categories: [categories.WELFARE, categories.CRISIS],
    amount: 20.0,
  },
  {
    email: "jim@example.com",
    name: "Jim",
    categories: [categories.EDUCATION],
    amount: 1.0,
  },
];

const CHARITIES_TEST_DATA = [
  {
    charityName: "BIAS",
    charityNumber: 123456,
    description: "Brent Irish Advisory Service",
    categories: [categories.WELFARE],
  },
  {
    charityName: "BIAS2",
    charityNumber: 222222,
    description: "Brent Irish Advisory Service 2",
    categories: [categories.WELFARE],
  },
  {
    charityName: "Mayhew",
    charityNumber: 333333,
    description: "Animal Home NW London",
    categories: [categories.ANIMAL],
  },
  {
    charityName: "Bob",
    charityNumber: 691420,
    description: "Bob",
    categories: [
      categories.ANIMAL,
      categories.CRISIS,
      categories.CULTURAL,
      categories.WELFARE,
      categories.HEALTH,
      categories.EDUCATION,
    ],
  },
];

module.exports = {
  REGISTER_TEST_DATA,
  CHARITIES_TEST_DATA,
};
