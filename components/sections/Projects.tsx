import React from 'react';

import ProjectCard from '../ProjectCard';
import { IProjectCard, Details } from 'types/project';

interface IProjectProps {
  projects: [IProjectCard];
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
  setImage: any;
}

const Projects = React.forwardRef<HTMLDivElement, IProjectProps>(
  ({ projects, setDetails, setImage }, ref) => {
    const proj = projects.map((p) => {
      return (
        <ProjectCard
          key={p.title}
          title={p.title}
          summary={p.summary}
          github={p.github}
          live={p.live}
          img={p.img}
          challenges={p.challenges}
          purpose={p.purpose}
          setDetails={setDetails}
          setImage={setImage}
        />
      );
    });

    return (
      <section
        id='projects'
        className='row-start-2 row-end-2 col-span-full '
        ref={ref}
      >
        <h3 className='font-bold font-sans text-4xl'>Projects</h3>
        <div className='  py-16'>{proj}</div>
      </section>
    );
  }
);

export default Projects;
