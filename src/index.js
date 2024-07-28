const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routers/index");

const { createChannel, subscribeMessage } = require("./utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("./config/serverConfig");
const ServiceLayer = require("./services/EmailSendService");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  const channel = await createChannel();
  subscribeMessage(channel, ServiceLayer.SubscribeEvent, REMINDER_BINDING_KEY);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

setupAndStartServer();
