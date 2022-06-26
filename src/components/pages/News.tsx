import NewsList from 'components/organisms/NewsList';
import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';

const News: VFC = () => {
  return (
    <Layout>
      <Title pageTitle='時間割' />
      <NewsList />
    </Layout>
  );
};

export default News;
