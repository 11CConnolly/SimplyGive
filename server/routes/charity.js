const express = require("express");
const Charity = require("../models/charity");

const router = express.Router();

const save = async (params) => {
  const charity = new Charity({ ...params });
  await charity.save();
};

/**
 * @method POST
 * @access public
 * @endpoint /api/charity/
 * @description Adds a charity to the database
 **/
router.post("/", async (req, res) => {
  try {
    await save(req.body);
    res.status(201).json({
      status: "Success",
      description: "charity created",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({
        status: "Failed",
        description: "invalid input, object invalid",
      });
    } else {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  }
});

/**
 * @method GET
 * @access public
 * @endpoint /api/charity/
 * @description Gets a list of all the charities in the Database
 **/
router.get("/", async (req, res) => {
  const charities = await Charity.find({});
  try {
    res.status(200).json({
      status: "Success",
      description: "all charities in database",
      charities,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

/**
 * @method POST
 * @access public
 * @endpoint /api/charity/findByCategory
 * @description Gets a list of all the charities in the Database under a certain category
 **/
router.post("/findByCategory", async (req, res) => {
  const charities = await Charity.find({
    categories: { $in: req.body.categories },
  });
  try {
    res.status(200).json({
      status: "Success",
      description: "Successful operation",
      charities,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

/**
 * @method POST
 * @access public
 * @endpoint /api/charity/findSingleByCategory
 * @description Gets a single charity from the list of chosen categories
 **/
router.post("/findSingleByCategory", async (req, res) => {
  const charities = await Charity.find({
    categories: { $in: req.body.categories },
  });
  // Pick a random charity from the list of charities
  const charity = charities[Math.floor(Math.random() * charities.length)];
  try {
    res.status(200).json({
      status: "Success",
      description: "Successful operation",
      charity,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

module.exports = router;
