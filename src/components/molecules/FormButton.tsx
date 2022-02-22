import { ReactNode, VFC } from 'react';

type Props = {
  type?: 'submit' | 'reset';
  children: ReactNode;
};
const FormButton: VFC<Props> = ({ type, children }) => {
  return (
    <button
      type={type || 'button'}
      className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-accent rounded-md hover:bg-blue-400 focus:outline-none focus:bg-accent focus:ring focus:ring-blue-300 focus:ring-opacity-50'
    >
      {children}
    </button>
  );
};

export default FormButton;
