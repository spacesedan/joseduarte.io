import Container from 'components/Container';
import HeroText from 'components/HeroText';
import Macbook from 'components/Macbook';

export default function Index() {
  return (
    <Container>
      <section
        id='hero'
        className='py-40 md:py-20 col-span-full row-start-1 row-end-2 min-h-screen'
      >
        <Macbook />
        <HeroText />
      </section>
      <section
        id='about'
        className='row-start-2 row-end-3 col-span-full max-h-screen'
      >
        <h3 className='font-bold font-sans text-4xl'>About</h3>
      </section>
      <section
        id='projects'
        className='row-start-3 row-end-4 col-span-full max-h-screen'
      >
        <h3 className='font-bold font-sans text-4xl'>Projects</h3>
      </section>
      <section
        id='workshop'
        className='row-start-4 row-end-5 col-span-full max-h-screen'
      >
        {' '}
        <h3 className='font-bold font-sans text-4xl'>In The Works</h3>
      </section>
      <section
        id='contact'
        className='row-start-5 row-end-6 col-span-full max-h-screen '
      >
        {' '}
        <h3 className='font-bold font-sans text-4xl'>Contact</h3>
      </section>
    </Container>
  );
}
