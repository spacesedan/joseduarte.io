import React from 'react';
import ProjectCard from '../ProjectCard';
import { IProjectCard } from 'types/project';

interface IProjectProps {
  projects: [IProjectCard];
}

const Projects = React.forwardRef<HTMLDivElement, IProjectProps>(
  ({ projects }, ref) => {
    const proj = projects.map((p) => {
      return (
        <ProjectCard
          key={p.title}
          title={p.title}
          summary={p.summary}
          github={p.github}
          live={p.live}
          img={p.img}
        />
      );
    });

    return (
      <section
        id='projects'
        className='row-start-2 row-end-2 col-span-full pt-12'
        ref={ref}
      >
        <h3 className='font-bold font-sans text-4xl'>Projects</h3>
        <div className=' px-4 md:px-8 lg:px-16 py-16'>{proj}</div>
      </section>
    );
  }
);

export default Projects;
