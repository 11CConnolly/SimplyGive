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
  console.log(req.body);
  try {
    await save(req.body);
    res.status(201).json({
      status: "Success",
      description: "User added",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

module.exports = router;
