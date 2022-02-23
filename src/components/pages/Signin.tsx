import { VFC } from 'react';
// ToDo: imgを変更する
import heroImg from 'assets/auth_heroImage.svg';
import AuthForm from 'components/organisms/AuthForm';
import Title from 'components/template/Title';

const Auth: VFC = () => {
  return (
    <div className='bg-white h-full'>
      <Title pageTitle='ログイン' />
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
              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
