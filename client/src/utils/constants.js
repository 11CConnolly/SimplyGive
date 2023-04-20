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

module.exports = { categories, formatAsGBP, parseAsGBP };
