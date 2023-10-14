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
  WHITE: "#FFF8F4",
  LIGHTPEACH: "#FFC8A2",
  PEACH: "#FFB380",
  ORANGENEW: "#FF9245",
  ORANGE: "#FF822B",
  ORANGEDARK: "#D66B24",
  REDDARK: "#A9551D",
  BROWN: "#643211",
};

module.exports = {
  categories,
  categoriesToDisplayText,
  formatAsGBP,
  parseAsGBP,
  zIndexLevels,
  colours,
};
