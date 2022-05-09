const nodemailer = require('nodemailer');

const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'gaylord.sporer33@ethereal.email',
      pass: 'PwU1nqJpUnfhrc2R3B',
    },
  });

  let info = await transporter.sendMail({
    from: '"Zakaria Kourdali 👻" <kourdali.zakaria@gmail.com.com>', // sender address
    // to: 'bar@example.com, baz@example.com', // list of receivers
    to: 'gaylord.sporer33@ethereal.email', // list of receivers
    subject: 'Email verification', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Testing email?</b>', // html body
  });
};

module.exports = sendEmail;
