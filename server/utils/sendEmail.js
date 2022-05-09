const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Zakaria Kourdali 👻" <kourdali.zakaria@gmail.com.com>', // sender address
    // to: 'bar@example.com, baz@example.com', // list of receivers
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
