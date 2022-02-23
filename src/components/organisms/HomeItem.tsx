import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  icon: IconProp;
  path: `/${string}`;
  children: ReactNode;
};
const HomeItem: VFC<Props> = ({ icon, title, path, children }) => {
  return (
    <Link
      to={path}
      className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl duration-300 hover:shadow-lg hover:cursor-pointer'
    >
      <span className='block p-3 text-accent bg-blue-100 rounded-full'>
        <FontAwesomeIcon icon={icon} className='w-6 h-6 block' />
      </span>
      <h1 className='text-2xl font-semibold text-gray-700 capitalize'>
        {title}
      </h1>
      <p className='text-gray-500 h-12 text-left'>{children}</p>
      <div className='ml-auto pr-4 w-fit -mx-1 text-sm text-accent capitalize transition-colors duration-200 transform hover:underline hover:text-accent'>
        <span className='mx-1'>Learn More</span>
        <FontAwesomeIcon icon={faLongArrowRight} />
      </div>
    </Link>
  );
};

export default HomeItem;
