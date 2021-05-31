export default function sendContactEmail(formData) {
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/plain',
    },
  });
}
