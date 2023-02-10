import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';
import AttendanceTable from 'components/organisms/AttendanceTable';

const Attendance: VFC = () => {
  return (
    <Layout>
      <Title pageTitle='出席率' />
      <AttendanceTable />
    </Layout>
  );
};

export default Attendance;
