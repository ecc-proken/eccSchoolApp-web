import { VFC } from 'react';

const LoadingSpiner: VFC = () => {
  return (
    <div className='flex justify-center items-center h-full w-full fixed z-10 top-0 left-0 bg-gray-500 bg-opacity-30'>
      <div className='animate-spin h-10 w-10 border-4 border-accent rounded-full border-t-transparent'></div>
    </div>
  );
};

export default LoadingSpiner;
