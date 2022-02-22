import FormButton from 'components/molecules/FormButton';
import FormInput from 'components/molecules/FormInput';
import { VFC } from 'react';

const AuthForm: VFC = () => {
  return (
    <form className='space-y-6'>
      <FormInput
        id='personalNumber'
        name='personalNumber'
        type='tel'
        placeholder='2000000'
      >
        Student number
      </FormInput>
      <FormInput
        id='password'
        name='password'
        type='password'
        placeholder='Your Password'
      >
        Password
      </FormInput>
      <FormButton type='submit'>Sign in</FormButton>
    </form>
  );
};

export default AuthForm;
