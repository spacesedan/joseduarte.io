import React from 'react';
import Image from 'next/image';

import { IModalProps } from 'types/project';
import Links from './Icons';

export const Modal: React.FC<IModalProps> = ({
  details,
  setDetails,
  selectedImage,
  setImage,
}) => {
  const { title, summary, purpose, challenges, github, live } = details;

  const handleClick = (e) => {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('modal__close')
    ) {
      setDetails(null);
      setImage(null);
    }
  };

  const handleIconClose = (e) => {
    e.preventDefault();
    setDetails(null);
    setImage(null);
  };

  console.log(selectedImage);

  return (
    <div
      className='backdrop row-span-full col-span-full z-50'
      onClick={handleClick}
    >
      <div className='modal__close fixed'>
        <svg
          onClick={handleIconClose}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 300 300'
          fill='currentColor'
          height='30px'
          width='30px'
          stroke='currentColor'
          className=''
        >
          <polygon points='178.01 150 273.56 245.55 245.55 273.56 150 178.01 54.45 273.56 26.44 245.55 121.99 150 26.44 54.45 54.45 26.44 150 121.99 245.55 26.44 273.56 54.45 178.01 150' />
        </svg>
      </div>

      <div className='modal bg-gray-200 dark:bg-gray-900 '>
        <div className='modal__img'>
          <a href={live} target='_blank' rel='noreferrer'>
            <div className='modal__img--img'>
              <Image
                src={`${selectedImage}`}
                layout='fill'
                objectFit='cover'
                objectPosition='left'
              />
            </div>
          </a>
        </div>
        <div className='modal__details overflow-y-auto'>
          <div className='modal__details--container px-4 mt-5 overflow-y-auto'>
            <h5 className='modal__details--title'>{title}</h5>
            <div className='modal__details--about flex flex-col justify-evenly  h-auto mt-5 p-3'>
              <div className='h-auto'>
                <p className='text-3xl font-semibold'>Summary</p>
                <p className='mt-2'>{summary}</p>
              </div>
              <div className='h-auto mt-3'>
                <p className='text-3xl font-semibold'>Purpose</p>
                <p className='mt-2'>{purpose}</p>
              </div>
              <div className='h-auto mt-3'>
                <p className='text-3xl font-semibold'>Challenges</p>
                <p className='mt-2'>{challenges}</p>
              </div>
            </div>
            <Links github={github} live={live} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
