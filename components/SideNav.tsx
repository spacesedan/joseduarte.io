export default function SideNav({
  scrollToHero,
  scrollToProjects,
  scrollToAbout,
  scrollToWorks,
  scrollToContact,
}) {
  return (
    <div className='flex flex-col items-center justify-center -mt-8'>
      <svg
        id='Home'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 600 600'
        fill='currentColor'
        stroke='currentColor'
        className='section_icon'
        onClick={scrollToHero}
      >
        <path d='M308,44C161.37,44,42.5,162.87,42.5,309.5S161.37,575,308,575,573.5,456.13,573.5,309.5,454.63,44,308,44Zm0,469.25c-112.53,0-203.75-91.22-203.75-203.75S195.47,105.75,308,105.75,511.75,197,511.75,309.5,420.53,513.25,308,513.25Z' />

        <circle id='Inner' data-name='Inner' cx='308' cy='309.5' r='113' />
      </svg>
      <svg
        id='Projects'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 600 600'
        fill='currentColor'
        stroke='currentColor'
        className='section_icon'
        onClick={scrollToProjects}
      >
        <path d='M308,44C161.37,44,42.5,162.87,42.5,309.5S161.37,575,308,575,573.5,456.13,573.5,309.5,454.63,44,308,44Zm0,469.25c-112.53,0-203.75-91.22-203.75-203.75S195.47,105.75,308,105.75,511.75,197,511.75,309.5,420.53,513.25,308,513.25Z' />

        <circle id='Inner' data-name='Inner' cx='308' cy='309.5' r='113' />
      </svg>
      <svg
        id='About'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 600 600'
        fill='currentColor'
        stroke='currentColor'
        className='section_icon'
        onClick={scrollToAbout}
      >
        <path d='M308,44C161.37,44,42.5,162.87,42.5,309.5S161.37,575,308,575,573.5,456.13,573.5,309.5,454.63,44,308,44Zm0,469.25c-112.53,0-203.75-91.22-203.75-203.75S195.47,105.75,308,105.75,511.75,197,511.75,309.5,420.53,513.25,308,513.25Z' />

        <circle id='Inner' data-name='Inner' cx='308' cy='309.5' r='113' />
      </svg>
      <svg
        id='Works'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 600 600'
        fill='currentColor'
        stroke='currentColor'
        className='section_icon'
        onClick={scrollToWorks}
      >
        <path d='M308,44C161.37,44,42.5,162.87,42.5,309.5S161.37,575,308,575,573.5,456.13,573.5,309.5,454.63,44,308,44Zm0,469.25c-112.53,0-203.75-91.22-203.75-203.75S195.47,105.75,308,105.75,511.75,197,511.75,309.5,420.53,513.25,308,513.25Z' />

        <circle id='Inner' data-name='Inner' cx='308' cy='309.5' r='113' />
      </svg>
      <svg
        id='Contact'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 600 600'
        fill='currentColor'
        stroke='currentColor'
        className='section_icon'
        onClick={scrollToContact}
      >
        <path d='M308,44C161.37,44,42.5,162.87,42.5,309.5S161.37,575,308,575,573.5,456.13,573.5,309.5,454.63,44,308,44Zm0,469.25c-112.53,0-203.75-91.22-203.75-203.75S195.47,105.75,308,105.75,511.75,197,511.75,309.5,420.53,513.25,308,513.25Z' />

        <circle id='Inner' data-name='Inner' cx='308' cy='309.5' r='113' />
      </svg>
    </div>
  );
}
