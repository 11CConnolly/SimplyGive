const validateDate = (date) => /\d{4}-\d{2}-\d{2}$/.test(date);

const TODAYS_DATE_IN_YYYY_MM_DD = () => new Date().toISOString().split("T")[0];

module.exports = { validateDate, TODAYS_DATE_IN_YYYY_MM_DD };
