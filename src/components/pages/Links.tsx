import LinkList from 'components/organisms/LinkList';
import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';

const News: VFC = () => {
  return (
    <Layout>
      <Title pageTitle='各種リンク' />
      <LinkList />
    </Layout>
  );
};

export default News;
