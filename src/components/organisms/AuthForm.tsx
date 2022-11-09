import FormButton from 'components/molecules/FormButton';
import FormInput from 'components/molecules/FormInput';
import useTokenAtom from 'hooks/useTokenAtom';
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
  VFC,
  useCallback,
} from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';

import { fetchInstance } from '../../libs/fetchInstance';

type Props = {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
const AuthForm: VFC<Props> = ({ setIsLoading }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [authResult, setAuthResult] = useState<null | boolean>(null);
  const setTokenHandler = useTokenAtom();
  const navigate = useNavigate();

  const onInput: FormEventHandler<HTMLInputElement> = useCallback(
    ({ currentTarget }) => {
      switch (currentTarget.name) {
        case 'id':
          setId(currentTarget.value);
          break;
        case 'pw':
          setPw(currentTarget.value);
          break;
        default:
          console.error('key が正しくありません');
          break;
      }
    },
    [setId, setPw],
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data, status } = await fetchInstance().post<{ token: string }>(
        '/signin',
        {
          id,
          pw,
        },
      );
      if (!data) throw new Error('通信に失敗しました。');
      if (status !== 200) return setAuthResult(false);
      setAuthResult(true);
      setTokenHandler(data.token);
      ReactGA.event('signin_success');
      navigate('/');
      setIsLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('ログインに失敗しました');
      ReactGA.event('signin_failure');
    }
    setIsLoading(false);
  };

  return (
    <form className='space-y-6' onSubmit={onSubmit}>
      <FormInput
        id='id'
        name='id'
        type='tel'
        placeholder='2000000'
        onInput={onInput}
      >
        Student number
      </FormInput>
      <FormInput
        id='pw'
        name='pw'
        type='password'
        placeholder='Your Password'
        onInput={onInput}
      >
        Password
      </FormInput>
      {authResult !== null && !authResult && (
        <span className='text-xs text-red-700'>
          ユーザーID・パスワードに誤りがあるか、登録されていません。
        </span>
      )}
      <FormButton type='submit'>Sign in</FormButton>
    </form>
  );
};

export default AuthForm;
