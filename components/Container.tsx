import Meta from './Meta';
import Nav from './Nav';

export default function Container(props) {
  const { children } = props;

  return (
    <div className='bg-gray-200 dark:bg-black min-h-screen grid grid-cols-7 grid-rows-1 px-24'>
      <Meta />
      <Nav />
      <main className='col-span-full row-span-full grid grid-rows-6 grid-cols-7'>
        {children}
      </main>
    </div>
  );
}
