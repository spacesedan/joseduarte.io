import { useRef, useEffect } from 'react';

import Meta from 'components/Meta';
import Nav from 'components/Nav';
import Hero from 'components/sections/Hero';
import Project from 'components/sections/Projects';
import About from 'components/sections/About';
import Works from 'components/sections/Works';
import Contact from 'components/sections/Contact';
import SideNav from 'components/SideNav';

export default function Index() {
  const homRef = useRef(null);
  const projRef = useRef(null);
  const aboRef = useRef(null);
  const worRef = useRef(null);
  const conRef = useRef(null);

  useEffect(() => {}, []);

  const scrollToHero = () => {
    homRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWorks = () => {
    worRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    conRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-gray-200 dark:bg-black min-h-screen grid grid-cols-7 grid-rows-1 px-24'>
      <Meta />
      <Nav>
        <SideNav
          scrollToHero={scrollToHero}
          scrollToProjects={scrollToProjects}
          scrollToAbout={scrollToAbout}
          scrollToWorks={scrollToWorks}
          scrollToContact={scrollToContact}
        />
      </Nav>
      <main className='col-span-full row-span-full grid grid-rows-6 grid-cols-7'>
        <Hero ref={homRef} />
        <Project ref={projRef} />
        <About ref={aboRef} />
        <Works ref={worRef} />
        <Contact ref={conRef} />
      </main>
    </div>
  );
}
