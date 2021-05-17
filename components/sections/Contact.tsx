import React from 'react';

import ContactForm from '../contact/ContactForm';

export const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id='contact'
      className='row-start-5 row-end-6 col-span-full'
      ref={ref}
    >
      {' '}
      <h3 className='font-bold font-sans text-4xl'>Contact</h3>
      <ContactForm />
    </section>
  );
});

export default Contact;
