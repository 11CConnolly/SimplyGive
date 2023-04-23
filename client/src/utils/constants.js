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

const categoriesToDisplayText = {
  HEALTH: "Health",
  WELFARE: "Welfare",
  ANIMAL: "Animal",
  CRISIS: "Crisis and Disaster",
  CULTURAL: "Culture",
  EDUCATION: "Education",
  LGBTQ: "LGBTQ+",
  DEVELOPMENT: "Economic Development",
};

const formatAsGBP = (val) => "£" + val;
const parseAsGBP = (val) => val.replace(/^£/, "");

const zIndexLevels = {
  LEVEL_MED: 1,
  LEVEL_HIGH: 10,
  LEVEL_ULTRA_HIGH: 100,
};

const colours = {
  NAVY: "#282c34",
  RICHBLACK: "#0a1119",
  WHITESMOKE: "#f5f5f5",
  IVORY: "#eff0e1",
  SIMPLYGIVEPINK: "#f8586a",
};

module.exports = {
  categories,
  categoriesToDisplayText,
  formatAsGBP,
  parseAsGBP,
  zIndexLevels,
  colours,
};
