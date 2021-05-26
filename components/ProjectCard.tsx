import React from 'react';
import Image from 'next/image';

import { IProjectCard } from 'types/project';
import Links from './Icons';

export const ProjectCard: React.FC<IProjectCard> = ({
  title,
  summary,
  github,
  live,
  img,
  purpose,
  challenges,
  setDetails,
  setImage,
}) => {
  const handleDetails = () => {
    setDetails({
      title: title,
      summary: summary,
      github: github,
      live: live,
      purpose: purpose,
      challenges: challenges,
    });
    // @ts-ignore
    setImage(img);
  };

  return (
    <div className='projectcard' onClick={handleDetails}>
      <h5 className='text-3xl font-bold pb-5'>{title}</h5>

      <div className='aspect-h-1 aspect-w-2 bg-black dark:bg-gray-200 relative'>
        <Image src={img} layout='fill' alt={title} />
      </div>
      <p className='pt-5 text-xl'>{summary}</p>
      <Links github={github} live={live} />
    </div>
  );
};

export default ProjectCard;
