const { notificationTicket } = require("../models/index");

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
}

module.exports = TicketRepository;
