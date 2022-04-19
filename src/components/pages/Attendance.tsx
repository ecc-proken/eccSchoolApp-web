import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';
import AttendanceCharts from 'components/organisms/AttendanceCharts';

const Attendance: VFC = () => {
  return (
    <Layout pageTitle='出席率'>
      <Title pageTitle='出席率' />
      <AttendanceCharts />
    </Layout>
  );
};

export default Attendance;
