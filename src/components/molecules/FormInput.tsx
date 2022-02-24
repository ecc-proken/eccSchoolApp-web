import { FormEventHandler, memo, ReactNode, useState, VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type Props = {
  type: 'tel' | 'password';
  id: string;
  placeholder: string;
  name: string;
  onInput: FormEventHandler<HTMLInputElement>;
  children: ReactNode;
};
const FormInput: VFC<Props> = ({
  type,
  id,
  placeholder,
  name,
  onInput,
  children,
}) => {
  if (type !== 'password')
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
          className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40'
          onInput={onInput}
          required
        />
      </div>
    );

  const [isShow, setIsShow] = useState(false);
  const onClick = () => setIsShow(!isShow);
  return (
    <div className='relative'>
      <div className='flex justify-between mb-2'>
        <label htmlFor={id} className='block mb-2 text-sm text-gray-600'>
          {children}
        </label>
        <a
          href='https://falcon.ecc.ac.jp/eccmo'
          target='_blank'
          className='text-sm text-gray-400 focus:text-accent hover:text-accent hover:underline'
          rel='noreferrer'
          tabIndex={-1}
        >
          Forgot password?
        </a>
      </div>
      <input
        type={isShow ? 'text' : 'password'}
        name={name}
        id={id}
        placeholder={placeholder}
        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40'
        onInput={onInput}
        required
      />
      <label htmlFor={id} className='cursor-pointer absolute bottom-0 right-0'>
        <button type='button' onClick={onClick}>
          <FontAwesomeIcon
            className='p-2.5'
            icon={isShow ? faEyeSlash : faEye}
          />
        </button>
      </label>
    </div>
  );
};

export default memo(FormInput);
