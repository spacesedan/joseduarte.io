import React, { PropsWithoutRef, ReactPropTypes } from 'react';

import Macbook from 'components/Macbook';
import HeroText from 'components/HeroText';

export const Hero = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id='hero'
      className='py-40 md:py-20 col-span-full row-start-1 row-end-2 min-h-screen flex flex-col justify-center items-center '
    >
      <Macbook />
      <HeroText />
    </section>
  );
});

export default Hero;
