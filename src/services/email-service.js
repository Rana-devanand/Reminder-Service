const sender = require("../config/email-config");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  });
};
module.exports = {
  sendBasicEmail,
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