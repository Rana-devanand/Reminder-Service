const { notificationTicket } = require("../models/index");
const Op = require("sequelize");

class TicketRepository extends notificationTicket {
  async getallTickets() {
    try {
      console.log("TicketRepository fetch");
      const tickets = await notificationTicket.findAll();
      return tickets;
    } catch (error) {
      console.error("Error retrieving tickets", error);
      throw error;
    }
  }

  async createTicket(data) {
    try {
      const ticket = await notificationTicket.create(data);
      return ticket;
    } catch (error) {
      console.error("Error creating a tickets", error);
      throw error;
    }
  }

  async get(filter) {
    try {
      const date = "2024-07-24T13:10:56.198Z";
      console.log(date);
      const ticket = await notificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: date,
          },
        },
      });
      return ticket;
    } catch (error) {
      console.error("Error creating a tickets", error);
      throw error;
    }
  }
}

module.exports = TicketRepository;
