import Title from 'components/template/Title';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: VFC = () => {
  return (
    <div className='flex items-center justify-center w-full h-full bg-accent'>
      <Title pageTitle='404 Page not found' />
      <div className='w-full h-full md:w-fit md:h-fit md:px-40 md:py-20 bg-white rounded-md shadow-xl'>
        <div className='h-full flex flex-col items-center justify-center'>
          <h1 className='font-bold text-accent text-9xl'>404</h1>
          <h6 className='mb-2 text-2xl font-bold text-center text-gray-700 md:text-3xl'>
            <span className='text-red-500'>Oops!</span> Page not found
          </h6>
          <p className='mb-8 text-center text-gray-500 md:text-lg'>
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <div className='flex gap-4'>
            <Link
              to='/'
              className='w-fit px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-accent rounded-md hover:bg-blue-400 focus:outline-none focus:bg-accent focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            >
              Go home
            </Link>
            <a
              href='https://twitter.com/yoruhanemutaiyo'
              target='_blank'
              className='w-fit px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-accent rounded-md hover:bg-blue-400 focus:outline-none focus:bg-accent focus:ring focus:ring-blue-300 focus:ring-opacity-50'
              rel='noreferrer'
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
