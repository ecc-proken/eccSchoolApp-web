import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';

const Timetable: VFC = () => {
  return (
    <Layout pageTitle='Timetable'>
      <Title pageTitle='時間割' />
    </Layout>
  );
};

export default Timetable;
