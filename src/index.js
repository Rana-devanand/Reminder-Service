const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routers/index");

const jobs = require("./utils/cron-job");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  // calling the cron job function.

  jobs();

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

  // sendBasicEmail(
  //   "support@example.com",
  //   "devanandrana168@gmail.com",
  //   "Need your help !",
  //   "I am facing a problem with the booking system. Please help me resolve it."
  // );
};

setupAndStartServer();
