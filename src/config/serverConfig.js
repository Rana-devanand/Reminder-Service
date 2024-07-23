const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  Email: process.env.EMAIL,
  Email_Password: process.env.EMAIL_PASSWORD,
};
