import { VFC } from 'react';

import LinkItem from 'components/molecules/LinkItem';

const linkData = [
  {
    title: '公式学生アプリ',
    url: 'https://comp-app.ecc-sv.com/app',
  },
  {
    title: '安否確認サイト',
    url: 'http://anpi.ecc.ac.jp/',
  },
  {
    title: 'HandBook',
    url: 'https://comp.ecc.ac.jp/about/pdf/handbook2022.pdf',
  },
  {
    title: 'E-Connect',
    url: 'https://ecc.learning-ware.jp/',
  },
  {
    title: 'SPIドリル',
    url: 'https://lines-spi.education.ne.jp/compecc/',
  },
  {
    title: 'Web Design Course Portal',
    url: 'https://enshrined-hen-e2d.notion.site/Web-Design-Course-Portal-e9bf669c5e604f96ae260cbd9529c904',
  },
  {
    title: '質問 / 要望 / バグ報告 のお問い合わせ',
    url: 'https://forms.gle/YSzZtB6EbFh3UwSr5',
  },
  {
    title: 'アプリのレビューを書いて応援してあげる',
    url: 'https://forms.gle/tsXfXPJJWBsiC7aCA',
  },
  {
    title: 'webアプリのGitHub',
    url: 'https://github.com/OkazakiRui/eccSchoolApp-web',
  },
  {
    title: '開発者のTwitter',
    url: 'https://twitter.com/yoruhanemutaiyo',
  },
  {
    title: '開発者の各種リンク',
    url: 'https://click.ecc.ac.jp/ecc/rokazaki/',
  },
];

const LinkList: VFC = () => {
  return (
    <div className='pb-14'>
      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <ul className='divide-y divide-gray-200'>
          {linkData.map((dt) => (
            <LinkItem key={dt.title} title={dt.title} url={dt.url} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinkList;
