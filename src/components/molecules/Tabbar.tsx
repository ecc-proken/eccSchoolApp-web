import tabDataList from 'data/tabDataList';
import { VFC } from 'react';
import TabItem from 'components/atoms/TabItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import userDataState from 'globalState/userDataState';
import { useResetRecoilState } from 'recoil';

const Tabbar: VFC = () => {
  const { pathname } = useLocation();
  const resetUserDataState = useResetRecoilState(userDataState);
  const navigation = useNavigate();

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
    <div className='bg-gray-50 sm:hidden fixed bottom-0 left-0 w-full h-12 flex z-50'>
      {tabDataList.map(({ pageName, icon, path }) => (
        <TabItem
          key={pageName}
          icon={icon}
          title={pageName}
          path={path}
          selected={pathname === path}
        />
      ))}
      <button
        type='button'
        onClick={signout}
        className='w-full h-full uppercase flex flex-col items-center transition-colors duration-200 justify-center border-t pt-2 text-gray-500 hover:text-accent'
      >
        <FontAwesomeIcon icon={faSignOut} className='text-xl mb-1' />
        <span className='text-[0.5625rem] font-normal'>ログアウト</span>
      </button>
    </div>
  );
};

export default Tabbar;
