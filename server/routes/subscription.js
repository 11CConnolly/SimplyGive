const express = require("express");
const Subscription = require("../models/subscription");

const router = express.Router();

const save = async (params) => {
  const subscription = new Subscription({ ...params });
  await subscription.save();
};

/**
 * @method POST
 * @access public
 * @endpoint /api/subscription/
 * @description Adds a Subscription to the database
 **/
router.post("/", async (req, res) => {
  console.log("In Route");
  console.log(req.body);
  try {
    await save(req.body);
    res.status(201).json({
      status: "Success",
      description: "Subscription added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

module.exports = router;
