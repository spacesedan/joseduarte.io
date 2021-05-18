import React from 'react';
import ProjectCard from 'components/ProjectCard';

export const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id='projects'
      className='row-start-2 row-end-2 col-span-full pt-12'
      ref={ref}
    >
      <h3 className='font-bold font-sans text-4xl'>Projects</h3>
      <div className=' px-4 md:px-8 lg:px-24 py-16'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
});

export default Projects;
