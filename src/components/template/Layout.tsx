import { ReactNode, VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import NavItem from 'components/molecules/NavItem';
import Logo from 'assets/logo.svg';
import tabDataList from 'data/tabDataList';
import { useResetRecoilState } from 'recoil';
import userDataState from 'globalState/userDataState';
import { useLocation, useNavigate } from 'react-router-dom';
import AnimationDiv from './AnimationDiv';

type Props = {
  children: ReactNode;
  pageTitle: string;
};
const Layout: VFC<Props> = ({ pageTitle, children }) => {
  const resetUserDataState = useResetRecoilState(userDataState);
  const navigation = useNavigate();
  const { pathname } = useLocation();

  /**
   * localstrage の中身を削除して state を default に戻します。
   * @date 2022-02-24
   * @returns {void}
   */
  const signout = () => {
    resetUserDataState();
    localStorage.clear();
    navigation('/signin');
  };

  return (
    <div className='min-h-full flex'>
      {/* side start */}
      <div className='min-h-fit hidden lg:block shadow-lg relative w-80'>
        <div className='bg-white h-full rounded-2xl'>
          <div className='flex items-center justify-center pt-6'>
            <img src={Logo} alt='logo' className='h-16' />
          </div>
          <nav className='mt-6'>
            {tabDataList.map(({ icon, pageName, path }) => (
              <NavItem
                icon={icon}
                title={pageName}
                key={pageName}
                path={path}
                selected={pathname === path}
              />
            ))}
            <button
              className='w-full uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-accent hover:bg-gray-100'
              type='button'
              onClick={signout}
            >
              <FontAwesomeIcon icon={faSignOut} className='text-xl' />
              <span className='mx-4 text-base font-normal'>ログアウト</span>
            </button>
          </nav>
        </div>
      </div>
      {/* side end */}
      <div className='min-h-full w-full overflow-scroll'>
        <AnimationDiv className='w-full px-2 py-4 md:px-6 md:py-10'>
          <h1 className='text-3xl font-semibold text-center text-gray-800 uppercase lg:text-4xl'>
            {pageTitle}
          </h1>
          {children}
        </AnimationDiv>
      </div>
    </div>
  );
};

export default Layout;
