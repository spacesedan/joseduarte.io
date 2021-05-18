import React from 'react';

export const Works = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id='workshop'
      className='row-start-4 row-end-5 col-span-full pt-12 min-h-screen'
      ref={ref}
    >
      {' '}
      <h3 className='font-bold font-sans text-4xl'>In The Works</h3>
      <p>This is the in the works section</p>
    </section>
  );
});

export default Works;
