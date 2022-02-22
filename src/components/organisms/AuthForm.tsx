import FormButton from 'components/molecules/FormButton';
import FormInput from 'components/molecules/FormInput';
import { FormEventHandler, VFC } from 'react';

const AuthForm: VFC = () => {
  const [inputState, setInputState] = useState({
    userId: '',
    password: '',
  });
  const onInput: FormEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInputState({ name: value });
  };
  // const onClick = () => {
  //   console.log('click!');
  // };
  // const submit = () => {
  //   console.log('submit!');
  // };
  return (
    <form className='space-y-6'>
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
