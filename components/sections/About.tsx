import React from 'react';

export const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id='about'
      className='row-start-3 row-end-4 col-span-full mt-10'
      ref={ref}
    >
      <h3 className='font-bold font-sans text-4xl'>About</h3>
      <p>This is the about section</p>
    </section>
  );
});

export default About;
