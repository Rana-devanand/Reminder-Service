const express = require("express");
const router = express.Router();

const EmailController = require("../../controllers/email-controller");

router.post("/createTicket", EmailController.create);

module.exports = router;
