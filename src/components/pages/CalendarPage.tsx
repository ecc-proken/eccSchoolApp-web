import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';
import Calendar from 'components/organisms/Calendar';

const CalendarPage: VFC = () => {
  return (
    <Layout>
      <Title pageTitle='時間割' />
      <Calendar />
    </Layout>
  );
};

export default CalendarPage;
