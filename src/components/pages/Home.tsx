import { VFC } from 'react';
import Layout from 'components/template/Layout';
import {
  faTable,
  faChartLine,
  faBell,
  faSignOut,
  faLongArrowRight,
  // faCalendarAlt,
  // faCog,
} from '@fortawesome/free-solid-svg-icons';
import HomeItem from 'components/organisms/HomeItem';
import Title from 'components/template/Title';
import useGetAllData from 'hooks/useGetAllData';
import { useResetRecoilState } from 'recoil';
import userDataState from 'globalState/userDataState';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: VFC = () => {
  useGetAllData();
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
    <Layout>
      <Title pageTitle='ホーム画面' />
      <div className='grid grid-cols-1 gap-4 mt-8 md:gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3'>
        <HomeItem title='時間割' path='/timetable' icon={faTable}>
          今週の時間割を確認することが出来ます。
        </HomeItem>
        <HomeItem title='出席率' path='/attendance' icon={faChartLine}>
          各授業の出席率を確認することが出来ます。
        </HomeItem>
        <HomeItem title='学校からのお知らせ' path='/news' icon={faBell}>
          学校からのお知らせを確認することが出来ます。
        </HomeItem>
        {/* <HomeItem title='カレンダー' path='/calendar' icon={faCalendarAlt}>
          今後の予定を確認することが出来ます。
          </HomeItem>
          <HomeItem title='設定' path='/settings' icon={faCog}>
          現在の設定を確認することが出来ます。
        </HomeItem> */}

        <button
          className='flex flex-col items-center p-4 md:p-6 space-y-3 text-center bg-gray-100 rounded-xl duration-300 hover:shadow-lg hover:cursor-pointer'
          type='button'
          onClick={signout}
        >
          <span className='block p-1 md:p-3 text-accent bg-blue-100 rounded-full'>
            <FontAwesomeIcon icon={faSignOut} className='w-6 h-6 block' />
          </span>
          <h1 className='text-xl md:text-2xl font-semibold text-gray-700 capitalize'>
            ログアウト
          </h1>
          <p className='text-gray-500 h-6 md:h-12 text-left text-sm md:text-base'>
            ログイン情報を削除し、ログアウトすることができます。
          </p>
          <div className='ml-auto pr-4 w-fit -mx-1 text-xs md:text-sm text-accent capitalize transition-colors duration-200 transform hover:underline hover:text-accent'>
            <span className='mx-1'>Learn More</span>
            <FontAwesomeIcon icon={faLongArrowRight} />
          </div>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
