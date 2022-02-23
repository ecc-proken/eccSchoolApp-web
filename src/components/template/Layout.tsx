import { ReactNode, VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import NavItem from 'components/molecules/NavItem';
import Logo from 'assets/logo.svg';
import tabDataList from 'data/tabDataList';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import selectTabState from 'globalState/selectTabState';
import userDataState from 'globalState/userDataState';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
  pageTitle: string;
};
const Layout: VFC<Props> = ({ pageTitle, children }) => {
  const selectTabName = useRecoilValue(selectTabState);
  const resetTabState = useResetRecoilState(selectTabState);
  const resetUserDataState = useResetRecoilState(userDataState);
  const navigation = useNavigate();
  const signout = () => {
    resetTabState();
    resetUserDataState();
    localStorage.clear();
    navigation('/signin');
  };
  return (
    <div className='h-full flex'>
      {/* side start */}
      <div className='h-full hidden lg:block my-4 shadow-lg relative w-80'>
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
                selected={selectTabName === pageName}
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
