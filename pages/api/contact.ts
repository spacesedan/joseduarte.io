import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: 'iam@joseduarte.io',
    subject: 'Someone Filled Out the Contact Form',
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info);
    });
  });
};
