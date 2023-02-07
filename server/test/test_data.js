const { categories } = require("../models/categories");

const TEST_DATA = [
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

module.exports = TEST_DATA;
