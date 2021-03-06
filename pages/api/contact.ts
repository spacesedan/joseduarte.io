import { NextApiRequest, NextApiResponse } from 'next';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID);

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const msg = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.text}
  `;

  const data = {
    to: 'iam@joseduarte.io',
    from: 'hello@joseduarte.io',
    subject: 'New contact form submission',
    text: msg,
    html: msg.replace(/\r\n/g, '<br>'),
  };

  sgMail
    .send(data)
    .then(() => {
      res.status(200).send(JSON.stringify(msg));

      console.log(msg);
    })
    .catch((error) => {
      res.json(error);
      console.error(error);
    });
};
