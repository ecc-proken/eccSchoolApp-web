import { useState, VFC } from 'react';
// ToDo: imgを変更する
import AuthForm from 'components/organisms/AuthForm';
import Title from 'components/template/Title';
import { useResetRecoilState } from 'recoil';
import tokenAtom from 'atom/tokenAtom';
import AnimationDiv from 'components/template/AnimationDiv';
import authHeroImage from 'assets/auth_heroImage.jpeg';
import LoadingSpiner from 'components/atoms/LoadingSpiner';

const Signin: VFC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const tokenReset = useResetRecoilState(tokenAtom);
  tokenReset();

  return (
    <AnimationDiv className='bg-white h-full relative'>
      <Title pageTitle='ログイン' />
      {isLoading && <LoadingSpiner />}
      <div className='flex justify-center h-full'>
        <div className='hidden bg-cover lg:block lg:w-2/3'>
          <div
            className='flex items-center h-full px-20 bg-gray-100 bg-no-repeat'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${authHeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <h2 className='text-4xl font-bold text-gray-50'>
                <span className='inline-block'>ECCコンピュータ専門学校</span>{' '}
                <span className='inline-block'>非公式アプリ</span>
              </h2>
              <p className='max-w-2xl mt-3 text-gray-50'>
                ECCコンピュータ専門学校のアプリをより使いやすく、学生の欲しい機能を詰め込んだWEBアプリケーションです。
                <br />
                時間割や出席率の確認が簡単にできます。
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <h2 className='text-4xl space-y-2 font-bold text-center text-gray-700'>
                <span className='inline-block'>ECCコンピュータ</span>
                <span className='inline-block'>専門学校</span>{' '}
                <span className='inline-block'>非公式アプリ</span>
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
