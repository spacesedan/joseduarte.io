import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Nav({ children }) {
  const [mounted, setMouted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting have access to theme
  useEffect(() => setMouted(true), []);

  return (
    <section className='col-start-7 col-end-7 row-span-full flex justify-center '>
      <nav className=' sticky-nav'>
        <div className='flex flex-col items-center'>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='bg-gray-300 dark:bg-gray-900 rounded md:p-3 p-1 md:h-10 h-8 md:w-10 w-8 focus:outline-none flex justify-center items-center '
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 600 600'
                fill='currentColor'
                stroke='currentColor'
                className='h-4 w-4  text-gray-800 dark:text-gray-200'
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M280.2,322.13a200.34,200.34,0,0,1-44.44-215.89,199.63,199.63,0,0,0-70.28,45.57c-78.23,78.23-78.23,205.06,0,283.28s205.05,78.23,283.27,0a199.54,199.54,0,0,0,44.44-67.38A200.33,200.33,0,0,1,280.2,322.13Z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M436.28,335.79a145.31,145.31,0,0,1-31.34,59.38l64,64-17.43,17.42-64.27-64.28a145,145,0,0,1-55.55,28.11c-2.33.59-4.68,1.15-7.05,1.63a142.48,142.48,0,0,1-14.45,2.2c-.85.09-1.71.17-2.57.24v90.06H283V444.47a144.68,144.68,0,0,1-37.72-8.32q-6.7-2.46-13.07-5.52c-1.06-.51-2.11-1-3.16-1.57q-6.27-3.22-12.19-7T205.45,414l-62.61,62.6-17.41-17.42,62-62a147.2,147.2,0,0,1-14.76-19.29c-.64-1-1.25-2-1.86-3a144.94,144.94,0,0,1-11-22.11c-.44-1.1-.85-2.21-1.26-3.33-1.64-4.45-3.05-9-4.26-13.67-.6-2.33-1.14-4.67-1.62-7a146,146,0,0,1-2.21-14.46c-.16-1.59-.29-3.19-.41-4.81H69.48V284.85h81a144.84,144.84,0,0,1,29-73.67L115.4,147.09l17.43-17.41,63.22,63.22A145,145,0,0,1,283,154.35V65.47H307.6v88.88c.86.07,1.72.16,2.57.24a145.35,145.35,0,0,1,14.45,2.2c2.37.48,4.72,1,7.05,1.63q7,1.8,13.67,4.25c1.12.41,2.22.83,3.32,1.26a145.41,145.41,0,0,1,22.11,11c1,.61,2,1.23,3,1.86a146.79,146.79,0,0,1,29.14,24.6l61.93-61.92,17.41,17.42L418,221.1q3.74,5.85,6.91,12c.54,1.05,1.07,2.09,1.57,3.16q3.08,6.36,5.53,13.06a144.75,144.75,0,0,1,8.32,37.73h90.17v24.63H440.35l-.24,2.57a146,146,0,0,1-2.2,14.46C437.42,331.12,436.87,333.46,436.28,335.79Z'
                  />
                )}
              </svg>
            )}
          </button>
          {children}
        </div>
      </nav>
    </section>
  );
}
