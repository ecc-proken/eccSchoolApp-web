import axios from 'axios';
import FormButton from 'components/molecules/FormButton';
import FormInput from 'components/molecules/FormInput';
import { FormEventHandler, useState, VFC } from 'react';

const AuthForm: VFC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const onInput: FormEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    switch (currentTarget.name) {
      case 'userId':
        setUserId(currentTarget.value);
        break;
      case 'password':
        setPassword(currentTarget.value);
        break;
      default:
        console.error('key が正しくありません');
        break;
    }
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/signin`,
      {
        userId,
        password,
      },
    );
    console.log(data);
  };

  return (
    <form className='space-y-6' onSubmit={onSubmit}>
      <FormInput
        id='userId'
        name='userId'
        type='tel'
        placeholder='2000000'
        onInput={onInput}
      >
        Student number
      </FormInput>
      <FormInput
        id='password'
        name='password'
        type='password'
        placeholder='Your Password'
        onInput={onInput}
      >
        Password
      </FormInput>
      <FormButton type='submit'>Sign in</FormButton>
    </form>
  );
};

export default AuthForm;
