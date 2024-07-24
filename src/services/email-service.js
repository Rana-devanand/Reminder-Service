const sender = require("../config/email-config");
const TicketRepository = require("../repository/EmailNotification-repository");

class ServiceLayer {
  constructor() {
    this.TicketRepository = new TicketRepository();
  }

  // send a notification email to the client end.
  async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
    sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  }
  // ----------------------------------------------------------------

  async createTicket(data) {
    try {
      const createTicket = await this.TicketRepository.createTicket(data);
      return createTicket;
    } catch (error) {
      console.error("Something went wrong in Service layer", error);
      console.log(error);
    }
  }

  async fetchPendingEmails(timestamp) {
    try {
      const response = await this.TicketRepository.get({ status: "PENDING" });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateStatus(ticketId, data) {
    try {
      const response = await this.TicketRepository.updateTicketStatus(
        ticketId,
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ServiceLayer;

/***
 *      example ->
 *      from --> a@b.com
 *      to --> c@d.com
 *
 *      not always we want to send the same email a@b.com ,
 *      with replace them we can be use support@developer.com
 *
 */
