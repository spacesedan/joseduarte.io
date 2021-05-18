import { useRef, useEffect, useState } from 'react';

import Meta from 'components/Meta';
import Nav from 'components/Nav';
import Hero from 'components/sections/Hero';
import Project from 'components/sections/Projects';
import About from 'components/sections/About';
import Works from 'components/sections/Works';
import Contact from 'components/sections/Contact';
import SideNav from 'components/SideNav';

import { getAllFilesFrontMatter } from 'lib/mdx';

export default function Index({ projects }) {
  const homRef = useRef(null);
  const projRef = useRef(null);
  const aboRef = useRef(null);
  const worRef = useRef(null);
  const conRef = useRef(null);

  /** Scrolling Actions */

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
    <div className='bg-gray-200 dark:bg-black min-h-screen grid grid-cols-7 grid-rows-1 px-6 md:px-24'>
      <Meta />
      <Nav>
        <SideNav
          hero={homRef}
          projects={projRef}
          about={aboRef}
          works={worRef}
          contact={conRef}
          scrollToHero={scrollToHero}
          scrollToProjects={scrollToProjects}
          scrollToAbout={scrollToAbout}
          scrollToWorks={scrollToWorks}
          scrollToContact={scrollToContact}
        />
      </Nav>
      <main className='container'>
        <Hero ref={homRef} />
        <Project ref={projRef} projects={projects} />
        <About ref={aboRef} />
        <Works ref={worRef} />
        <Contact ref={conRef} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');

  return {
    props: { projects },
  };
}
