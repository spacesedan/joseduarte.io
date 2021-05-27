import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const msg = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.text}
  `;

  const data = {
    to: 'iam@joseduarte.io',
    from: 'iam@joseduarte.io',
    subject: 'New contact form submission',
    text: msg,
    html: msg.replace(/\r\n/g, '<br>'),
  };

  sgMail.send(data);

  console.log(body);
  res.status(200).json({ status: 'ok' });
};
