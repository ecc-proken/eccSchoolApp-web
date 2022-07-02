import { VFC } from 'react';

const NotificationDetail: VFC = () => {
  return (
    <div className='rounded-2xl p-4'>
      <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto'>
          <div>
            <h2 className='mb-4 text-3xl font-bold tracking-tight text-gray-700 leading-normal md:text-4xl md:leading-relaxed'>
              iPhone, Android端末
            </h2>
            <p className='mb-4'>
              このサイトは端末にインストールして使用することができます。
              <br />
              iPhone,
              Androidの方はインストールをして使用することを推奨しています
            </p>
            <a
              href='https://www.itmedia.co.jp/mobile/articles/2203/26/news015.html'
              target='_blank'
              rel='noreferrer'
              className='block text-[14px] xl:text-[16px] text-blue-500 underline underline-offset-1 mb-2'
            >
              iPhone, iPadの方はこちら
            </a>
            <a
              href='https://tanweb.net/2022/01/30/44996/'
              target='_blank'
              rel='noreferrer'
              className='block text-[14px] xl:text-[16px] text-blue-500 underline underline-offset-1'
            >
              Androidの方はこちら
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
