import { ReactNode, VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTable,
  faChartLine,
  faBell,
  faCalendarAlt,
  faCog,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
};
const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className='h-full flex'>
      {/* side start */}
      <div className='h-full hidden lg:block my-4 shadow-lg relative w-80'>
        <div className='bg-white h-full rounded-2xl'>
          <div className='flex items-center justify-center pt-6'>
            {/* icon */}
            <svg
              width='35'
              height='30'
              viewBox='0 0 256 366'
              version='1.1'
              preserveAspectRatio='xMidYMid'
            >
              <defs>
                <linearGradient
                  x1='12.5189534%'
                  y1='85.2128611%'
                  x2='88.2282959%'
                  y2='10.0225497%'
                  id='linearGradient-1'
                ></linearGradient>
              </defs>
              <g>
                <path
                  d='M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z'
                  fill='#001B38'
                ></path>
                <circle
                  fill='url(#linearGradient-1)'
                  transform='translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) '
                  cx='147.013244'
                  cy='147.014675'
                  r='78.9933938'
                ></circle>
                <circle
                  fill='url(#linearGradient-1)'
                  opacity='0.5'
                  transform='translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) '
                  cx='147.013244'
                  cy='147.014675'
                  r='78.9933938'
                ></circle>
              </g>
            </svg>
          </div>
          <nav className='mt-6'>
            {/* 時間割 */}
            <Link
              className='w-full uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100  border-r-4 border-blue-500'
              to='/'
            >
              <FontAwesomeIcon icon={faTable} className='text-xl' />
              <span className='mx-4 text-base font-normal'>時間割</span>
            </Link>
            {/* 出席率 */}
            <Link
              className='w-full uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'
              to='/'
            >
              <FontAwesomeIcon icon={faChartLine} className='text-xl' />
              <span className='mx-4 text-base font-normal'>出席率</span>
            </Link>
            {/* お知らせ */}
            <Link
              className='w-full uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'
              to='/'
            >
              <FontAwesomeIcon icon={faBell} className='text-xl' />
              <span className='mx-4 text-base font-normal'>お知らせ</span>
            </Link>
            {/* カレンダー */}
            <Link
              className='w-full uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'
              to='/'
            >
              <FontAwesomeIcon icon={faCalendarAlt} className='text-xl' />
              <span className='mx-4 text-base font-normal'>カレンダー</span>
            </Link>
            {/* 設定 */}
            <Link
              className='w-full uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'
              to='/'
            >
              <FontAwesomeIcon icon={faCog} className='text-xl' />
              <span className='mx-4 text-base font-normal'>設定</span>
            </Link>
            {/* ログアウト */}
            <button
              className='w-full uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'
              type='button'
            >
              <FontAwesomeIcon icon={faSignOut} className='text-xl' />
              <span className='mx-4 text-base font-normal'>ログアウト</span>
            </button>
          </nav>
        </div>
      </div>
      {/* side end */}
      <div className='w-full'>{children}</div>
    </div>
  );
};

export default Layout;
