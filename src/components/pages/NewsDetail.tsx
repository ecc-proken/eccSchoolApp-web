import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';
import NewsDetail from 'components/organisms/NewsDetail';

const NewsDetailPage: VFC = () => {
  return (
    <Layout>
      <Title pageTitle='お知らせ' />
      <NewsDetail />
    </Layout>
  );
};

export default NewsDetailPage;
