const sender = require("../config/email-config");
const TicketRepository = require("../repository/EmailNotification-repository");

class ServiceLayer {
  constructor() {
    this.TicketRepository = new TicketRepository();
  }
  async(mailFrom, mailTo, mailSubject, mailBody) {
    sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  }

  async fetchPendingEmails(timestamp) {
    try {
      console.log("Service fetch");
      const response = await this.TicketRepository.getallTickets();
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
