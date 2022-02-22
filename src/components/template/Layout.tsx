import { ReactNode, VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTable,
  faChartLine,
  faBell,
  faCalendarAlt,
  faCog,
  faSignOut,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import NavItem from 'components/molecules/NavItem';
import Logo from 'assets/logo.svg';

type Props = {
  children: ReactNode;
  pageTitle: string;
};
const Layout: VFC<Props> = ({ pageTitle, children }) => {
  return (
    <div className='h-full flex'>
      {/* side start */}
      <div className='h-full hidden lg:block my-4 shadow-lg relative w-80'>
        <div className='bg-white h-full rounded-2xl'>
          <div className='flex items-center justify-center pt-6'>
            <img src={Logo} alt='logo' className='h-16' />
          </div>
          <nav className='mt-6'>
            <NavItem icon={faHome} title='ホーム' path='/' selected />
            <NavItem icon={faTable} title='時間割' path='/timetable' />
            <NavItem icon={faChartLine} title='出席率' path='/attendance' />
            <NavItem icon={faBell} title='お知らせ' path='/news' />
            <NavItem icon={faCalendarAlt} title='カレンダー' path='/calendar' />
            <NavItem icon={faCog} title='設定' path='/settings' />
            {/* ログアウト */}
            <button
              className='w-full uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-accent hover:bg-gray-100'
              type='button'
            >
              <FontAwesomeIcon icon={faSignOut} className='text-xl' />
              <span className='mx-4 text-base font-normal'>ログアウト</span>
            </button>
          </nav>
        </div>
      </div>
      {/* side end */}
      <div className='w-full px-6 py-10'>
        <h1 className='text-3xl font-semibold text-center text-gray-800 uppercase lg:text-4xl'>
          {pageTitle}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
