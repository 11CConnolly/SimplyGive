const categories = {
  HEALTH: "health",
  WELFARE: "welfare",
  ANIMAL: "animal",
  CRISIS: "crisis",
  CULTURAL: "cultural",
  EDUCATION: "education",
};

const formatAsGBP = (val) => "£" + val;
const parseAsGBP = (val) => val.replace(/^£/, "");

const zIndexLevels = {
  LEVEL_MED: 1,
  LEVEL_HIGH: 10,
  LEVEL_ULTRA_HIGH: 100,
};

module.exports = { categories, formatAsGBP, parseAsGBP, zIndexLevels };
