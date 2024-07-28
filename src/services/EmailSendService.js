const sender = require("../config/email-config");
const jobs = require("../utils/cron-job");
const TicketRepository = require("../repository/EmailNotification-repository");

const ticketRepository = new TicketRepository();

// send a notification email to the client end.
const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  });
};
// ----------------------------------------------------------------

const createTicket = async (data) => {
  try {
    const createTicket = await ticketRepository.createTicket(data);
    return createTicket;
  } catch (error) {
    console.error("Something went wrong in Service layer", error);
    console.log(error);
  }
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const response = await ticketRepository.get({ status: "PENDING" });
    return response;
  } catch (error) {
    throw error;
  }
};

const updateStatus = async (ticketId, data) => {
  try {
    const response = await ticketRepository.updateTicketStatus(ticketId, data);
    return response;
  } catch (error) {
    throw error;
  }
};
const SubscribeEvent = async (payload) => {
  let service = payload.service;
  let data = payload.data;

  switch (service) {
    case "CREATE_TICKET":
      await createTicket(data);
      jobs();
      break;

    case "SEND_BASIC_EMAIL":
      await sendBasicEmail(data);
      break;

    default:
      console.log("No valid event received");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  createTicket,
  fetchPendingEmails,
  updateStatus,
  SubscribeEvent,
};

/***
 *      example ->
 *      from --> a@b.com
 *      to --> c@d.com
 *
 *      not always we want to send the same email a@b.com ,
 *      with replace them we can be use support@developer.com
 *
 */
