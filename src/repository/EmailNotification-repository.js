const { TicketNotification } = require("../models/index");
const { Op } = require("sequelize");

class TicketRepository extends TicketNotification {
  async getallTickets() {
    try {
      console.log("TicketRepository fetch");
      const tickets = await TicketNotification.findAll();
      return tickets;
    } catch (error) {
      console.error("Error retrieving tickets", error);
      throw error;
    }
  }

  async createTicket(data) {
    try {
      const ticket = await TicketNotification.create(data);
      return ticket;
    } catch (error) {
      console.error("Error creating a tickets", error);
      throw error;
    }
  }

  async get(filter) {
    try {
      const tickets = await TicketNotification.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date().toUTCString(),
          },
        },
      });
      return tickets;
    } catch (error) {
      console.error("Error creating a tickets", error);
      throw error;
    }
  }
}

module.exports = TicketRepository;
