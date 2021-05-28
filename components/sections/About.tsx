import BackendIcons from 'components/BackendSkills';
import DesignIcons from 'components/DesignSkills';
import FrontendIcons from 'components/FrontendSkills';
import React from 'react';

export const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id='about'
      className='row-start-3 row-end-4 col-span-full pt-12 min-h-screen'
      ref={ref}
    >
      <h3 className='font-bold font-sans text-4xl'>About</h3>
      <div className='flex justify-center items-center'>
        <div className=' flex justify-start mt-10 text'>
          <p className='paragraph'>
            Hello, my name is Jose Duarte and I am a front end web developer
            from Los Angeles, California. I began my programming journey while I
            was attending college and saw one of my friends writing programs
            using Python, he looked like he was really enjoying it. Watching him
            program pushed me to purchase a beginner Python book, and I learned
            the basics of Python. The book also included some projects in the
            second half, the project of the projects that stood out the most to
            me was one where I had to create a web application using Django, a
            python web framework. I would get super excited when I saw the
            changes I made in the code appear in the browser and form there I
            was hooked on creating web application and wanted to get better at
            it. During the time that I was working on my first web application
            one of my coworkers mentioned a front-end library called React, when
            I looked into it and thought to myself that I could intergrate what
            I have been learning, with this new library and build some really
            amazing websites. After, I finshed my first web application, I
            purchased a couple of courses on Udemy, one was a Javascript course
            in which i learned the basics of javascript, i picked this one up as
            a prerequisite to React. I also purchased a beginners React course
            which included 3 projects to build using the library. I really
            enjoyed working with Javascript and my original plan was to use
            Python as my server side language and Javascript as my client side
            language, but that quickly changed when I learned i could write
            backend code using Javascript by using Node.js. After finished those
            courses I focused on building full stack Javascript applications
            while focusing most of my attention on the front end.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='mt-8 w-4/5'>
          <p className='text-2xl md:text-3xl font-semibold uppercase'>Skills</p>
          <div className='mt-5 flex flex-col '>
            <div>
              <p className='text-xl md:text-2xl font-semibold'>Front End:</p>
              <FrontendIcons />
            </div>
            <div className='mt-5'>
              <p className='text-xl md:text-2xl font-semibold'>Back End:</p>
              <BackendIcons />
            </div>
            <div className='mt-5'>
              <p className='text-xl md:text-2xl font-semibold'>
                Design Software:
              </p>
              <DesignIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
