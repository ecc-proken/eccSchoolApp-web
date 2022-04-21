import { VFC } from 'react';
import Layout from 'components/template/Layout';
import {
  faTable,
  faChartLine,
  // faBell,
  // faCalendarAlt,
  // faCog,
} from '@fortawesome/free-solid-svg-icons';
import HomeItem from 'components/organisms/HomeItem';
import Title from 'components/template/Title';
import useGetAllData from 'hooks/useGetAllData';

const Home: VFC = () => {
  useGetAllData();
  return (
    <Layout pageTitle='ホーム'>
      <Title pageTitle='ホーム画面' />
      <div className='grid grid-cols-1 gap-4 mt-8 md:gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3'>
        <HomeItem title='時間割' path='/timetable' icon={faTable}>
          今週の時間割を確認することが出来ます。
        </HomeItem>
        <HomeItem title='出席率' path='/attendance' icon={faChartLine}>
          各授業の出席率を確認することが出来ます。
        </HomeItem>
        {/* <HomeItem title='学校からのお知らせ' path='/news' icon={faBell}>
          学校からのお知らせを確認することが出来ます。
        </HomeItem>
        <HomeItem title='カレンダー' path='/calendar' icon={faCalendarAlt}>
          今後の予定を確認することが出来ます。
        </HomeItem>
        <HomeItem title='設定' path='/settings' icon={faCog}>
          現在の設定を確認することが出来ます。
        </HomeItem> */}
      </div>
    </Layout>
  );
};

export default Home;
