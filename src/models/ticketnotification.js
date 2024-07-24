"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TicketNotification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TicketNotification.init(
    {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recipientEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["PENDING", "SUCCESS", "FAILED"],
        defaultValue: "PENDING",
      },
      notificationTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TicketNotification",
    }
  );
  return TicketNotification;
};
