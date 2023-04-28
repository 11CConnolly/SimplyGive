const { faker } = require("@faker-js/faker");
const {
  categories,
  categoriesArray,
  nRandomCategories,
} = require("../models/categories");
const { ObjectId } = require("mongodb");

// TODO These mocks now depends on the schema in a very fragile way
const CreateMock_RegisterObject = () => {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    amount: faker.finance.amount(5, 1000, 0),
    categories: nRandomCategories(
      faker.datatype.number({
        min: 1,
        max: categoriesArray.length,
      })
    ),
  };
};

const CreateMock_UserObject = () => {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    subscription: {
      mandateID: faker.lorem.word(),
      amount: faker.finance.amount(5, 1000, 0),
      categories: nRandomCategories(
        faker.datatype.number({
          min: 1,
          max: categoriesArray.length,
        })
      ),
    },
    donations: [],
  };
};

const CreateMock_GoCardlessMandateObject = () => {
  return {
    mandateID: faker.lorem.word(),
  };
};

const CreateMock_CharityObject = () => {
  return {
    charityName: faker.database.mongodbObjectId(),
    charityNumber: faker.name.firstName(),
    description: faker.internet.email(),
    categories: nRandomCategories(
      faker.datatype.number({
        min: 1,
        max: 4,
      })
    ),
    recentNews: faker.lorem.slug(),
    recentNewsUpdateDate: faker.date.soon(),
    isInMonthlyPool: faker.datatype.boolean(),
  };
};

module.exports = {
  CreateMock_RegisterObject,
  CreateMock_UserObject,
  CreateMock_GoCardlessMandateObject,
  CreateMock_CharityObject,
};
