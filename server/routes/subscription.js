const express = require("express");
const Subscription = require("../models/subscription");

const router = express.Router();

const save = async (params) => {
  const subscription = new Subscription({ ...params });
  await subscription.save();
};

/**
 * @method GET
 * @access public
 * @endpoint /api/subscription/
 * @description Gets a list of all subscriptions from the database
 **/
router.get("/", async (req, res) => {
  const users = await Subscription.find({});
  try {
    res.status(200).json({
      status: "Success",
      description: "all subscriptions in database",
      users,
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
 * @endpoint /api/subscription/
 * @description Adds a Subscription to the database
 **/
router.post("/", async (req, res) => {
  try {
    await save(req.body);
    res.status(201).json({
      status: "Success",
      description: "Subscription added",
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

module.exports = router;
