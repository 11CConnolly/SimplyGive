const express = require("express");
const router = express.Router();
const subscriptionController = require("../modules/subscriptionController");

/**
 * @method POST
 * @access public
 * @endpoint /api/subscriptions/receiveMandate
 * @description Receives a mandate object from GoCardless and activates / deactives a users subscription
 **/
router.post("/receiveMandate", subscriptionController.ReceiveMandate);

/**
 * @method POST
 * @access public
 * @endpoint /api/subscriptions/receiveDonation
 * @description Receive a donation from GoCardless. Adds to a users donation after finding a
 *              charity in this months pool
 **/
// router.post("/receiveDonation", subscriptionController.ReceiveDonation);

module.exports = router;
