import Table from 'components/organisms/Table';
import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';

const Timetable: VFC = () => {
  return (
    <Layout pageTitle='Timetable'>
      <Title pageTitle='時間割' />
      <Table />
    </Layout>
  );
};

export default Timetable;
