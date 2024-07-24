const cron = require("node-cron");
const emailService = require("../services/email-service");

const EmailService = new emailService();

const setupJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    //     here we will check the pending emails
    //     and send the reminder email if the email is pending
    try {
      const response = await EmailService.fetchPendingEmails();
      //       response.forEach((email) => {
      //         EmailService.sendBasicEmail(
      //           "devanand@support.google.com",
      //           email.recipientEmail,
      //           email.subject,
      //           email.content
      //         );
      //       });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = setupJobs;

/**
 *
 *  10:00 AM-
 *  Every 5 minutes :
 *  we will check are their any pending emails which was expected to be sent by now and
 *  is pending.
 */
