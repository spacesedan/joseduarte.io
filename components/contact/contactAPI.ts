import axios from 'axios';

export async function sendMail(email: string, name: string, text: string) {
  const data = {
    email,
    name,
    text,
  };

  try {
    const res = await axios({
      method: 'POST',
      url: '/api/contact',
      headers: {
        'Content-type': 'application/json',
      },
      data,
    });

    return res;
  } catch (err) {
    console.log('Error: ', err);
  }
}
