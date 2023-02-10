const express = require("express");
const User = require("../models/user");

const router = express.Router();

const save = async (params) => {
  const user = new User({ ...params });
  await user.save();
};

/**
 * @method POST
 * @access public
 * @endpoint /api/user/
 * @description Adds a User to the database
 **/
router.post("/", async (req, res) => {
  try {
    await save(req.body);
    res.status(201).json({
      status: "Success",
      description: "User added",
    });
  } catch (err) {
    if (err.code === 11000) {
      res.status(422).json({
        status: "Failed",
        description: "email already in use",
      });
    } else if (err.name === "ValidationError") {
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
 * @endpoint /api/user/
 * @description Gets a list of users from the database
 **/
router.get("/", async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).json({
      status: "Success",
      description: "all users in database",
      users,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

module.exports = router;
