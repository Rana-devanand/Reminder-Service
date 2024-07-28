const cron = require("node-cron");
const emailService = require("../services/email-service");
const sender = require("../config/email-config");

const EmailService = new emailService();

const setupJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    //     here we will check the pending emails
    //     and send the reminder email if the email is pending every 1 minute
    try {
      const response = await EmailService.fetchPendingEmails();
      response.forEach((email) => {
        sender.sendMail(
          {
            from: "sender@example.com",
            to: email.recipientEmail,
            subject: email.subject,
            text: email.content,
          },
          async (err, data) => {
            if (err) {
              console.log("Error occurred while sending email: ", err);
            } else {
              await EmailService.updateStatus(email.id, {
                status: "SUCCESS",
              });
            }
          }
        );
      });

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
