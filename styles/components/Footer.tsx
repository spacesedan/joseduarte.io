import { PORTFOLIO_REPO, LINKEDIN } from 'lib/constants';

export default function Footer() {
  return (
    <footer className='col-span-full h-56 flex justify-center items-center '>
      <div className='w-11/12 h-5/6 flex items-center'>
        <div className='grid grid-cols-3 w-full grid-rows-2 md:text-xl text-lg text-gray-900 dark:text-gray-600 '>
          <div className='col-start-1 col-end-1 flex justify-center items-center row-span-1 '>
            <a
              href={PORTFOLIO_REPO}
              target='_blank'
              rel='noreferrer'
              className='hover:text-green-400'
            >
              Portfolio Repo
            </a>
          </div>
          <div className='col-start-2 col-end-2 flex justify-center items-center row-span-1 '>
            <a
              href={LINKEDIN}
              target='_blank'
              rel='noreferrer'
              className='hover:text-green-400 '
            >
              LinkedIn
            </a>
          </div>
          <div className='col-start-3 col-end-3 flex justify-center items-center row-span-1'></div>
          <p className='row-start-2 row-span-1 col-span-full mt-16 '>
            &#169; Jose Duarte 2021
          </p>
        </div>
      </div>
    </footer>
  );
}
