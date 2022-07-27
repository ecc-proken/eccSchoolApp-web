import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';
import NotificationDetail from 'components/organisms/NotificationDetail';

const NewsDetail: VFC = () => {
  return (
    <Layout>
      <Title pageTitle='お知らせ' />
      <NotificationDetail />
    </Layout>
  );
};

export default NewsDetail;
