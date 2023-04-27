// Allowed Categories of Charity

const categories = {
  HEALTH: "health",
  WELFARE: "welfare",
  ANIMAL: "animal",
  CRISIS: "crisis",
  CULTURAL: "cultural",
  EDUCATION: "education",
  LGBTQ: "lgbtq",
  DEVELOPMENT: "development",
};

const categoriesArray = Object.values(categories);

const randomCategory = categoriesArray.at(
  Math.floor(Math.random() * categoriesArray.length)
);

const nRandomCategories = (n) => {
  // Basic error checking becuase JavaScript isn't a real language
  if (n < 0 || n > categoriesArray.length) {
    return [];
  }

  const set = [...categoriesArray];
  const resultant = [];

  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * set.length);

    // Add that index to find an item in
    resultant.push(set[index]);

    set.splice(index, 1);
  }

  return resultant;
};

module.exports = {
  categories,
  categoriesArray,
  randomCategory,
  nRandomCategories,
};
