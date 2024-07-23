const nodemailer = require("nodemailer");

const { Email, Email_Password } = require("./serverConfig");

const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Email,
    pass: Email_Password,
  },
});

module.exports = sender;
