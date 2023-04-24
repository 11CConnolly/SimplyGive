const express = require("express");
const router = express.Router();
const registerController = require("../modules/registerController");

/**
 * @method POST
 * @access public
 * @endpoint /api/register/
 * @description Adds a new user with a setup subscription
 **/
router.post("/", registerController.RegisterUser);

module.exports = router;
