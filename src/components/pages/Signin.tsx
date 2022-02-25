import { useEffect, useState, VFC } from 'react';
// ToDo: imgを変更する
import heroImg from 'assets/auth_heroImage.svg';
import AuthForm from 'components/organisms/AuthForm';
import Title from 'components/template/Title';
import { useRecoilState, useResetRecoilState } from 'recoil';
import userDataState from 'globalState/userDataState';
import axios from 'axios';
import LoadingSpiner from 'components/atoms/LoadingSpiner';
import { useNavigate } from 'react-router-dom';
import AnimationDiv from 'components/template/AnimationDiv';

const Signin: VFC = () => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const userDataReset = useResetRecoilState(userDataState);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * atom にデータがあれば、ログイン出来るかを確認し出来た場合は ホーム画面 に遷移する
   * @date 2022-02-23
   * @returns {void}
   */
  useEffect(() => {
    if (userData.userId === null || userData.password === null) return;
    setIsLoading(true);
    axios
      .post<{
        message: 'success' | 'error';
        status: 200 | 401;
      }>(`${process.env.REACT_APP_API_URL}/signin`, userData)
      .then(({ data }) => {
        setIsLoading(false);
        if (data.status === 401) return userDataReset();
        setUserData(userData);
        navigate('/');
      });
  }, []);

  return (
    <AnimationDiv className='bg-white h-full relative'>
      <Title pageTitle='ログイン' />
      {isLoading && <LoadingSpiner />}
      <div className='flex justify-center h-full'>
        <div className='hidden bg-cover lg:block lg:w-2/3'>
          <div
            className='flex items-center h-full px-20 bg-gray-100 bg-no-repeat'
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: '50%',
              backgroundPosition: 'center right 10%',
            }}
          >
            <div>
              <h2 className='text-4xl font-bold text-gray-700'>
                ECCcomp School App
              </h2>

              {/* ToDo: 画像にあったサイズに変更する */}
              <p className='max-w-md mt-3 text-gray-500'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <h2 className='text-4xl space-y-2 font-bold text-center text-gray-700'>
                <span className='inline-block'>ECCcomp</span>{' '}
                <span className='inline-block'>School App</span>
              </h2>

              <p className='mt-3 text-gray-500'>
                Sign in to access your account
              </p>
            </div>

            <div className='mt-8'>
              <AuthForm setIsLoading={setIsLoading} />
            </div>
          </div>
        </div>
      </div>
    </AnimationDiv>
  );
};

export default Signin;
