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
      <label htmlFor={id} className='block mb-2 text-sm text-gray-600'>
        {children}
      </label>
      <label
        htmlFor={id}
        className='cursor-pointer absolute bottom-2.5 right-3'
        onClick={onClick}
      >
        <FontAwesomeIcon icon={isShow ? faEyeSlash : faEye} />
      </label>
      <input
        type={isShow ? 'text' : 'password'}
        name={name}
        id={id}
        placeholder={placeholder}
        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-accent focus:outline-none focus:ring focus:ring-opacity-40'
        onInput={onInput}
        required
      />
    </div>
  );
};

export default memo(FormInput);
