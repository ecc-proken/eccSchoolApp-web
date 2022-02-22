import { ReactNode, VFC } from 'react';

type Props = {
  type: 'tel' | 'password';
  id: string;
  placeholder: string;
  name: string;
  children: ReactNode;
};
const FormInput: VFC<Props> = ({ type, id, placeholder, name, children }) => {
  return (
    <div>
      <label htmlFor={id} className='block mb-2 text-sm text-gray-600'>
        {children}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
      />
    </div>
  );
};

export default FormInput;
