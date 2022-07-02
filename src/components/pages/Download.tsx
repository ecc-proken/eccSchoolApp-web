import Layout from 'components/template/Layout';
import Title from 'components/template/Title';
import { VFC } from 'react';
import DownloadDetail from 'components/organisms/DownloadDetail';

const NewsDetail: VFC = () => {
  return (
    <Layout>
      <Title pageTitle='ホームに追加する' />
      <DownloadDetail />
    </Layout>
  );
};

export default NewsDetail;
