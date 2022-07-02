import { VFC } from 'react';

type Props = {
  title: string;
  url: string;
};

const LinkItem: VFC<Props> = ({ title, url }) => {
  return (
    <li>
      <a
        className='block hover:bg-gray-50 px-4 py-4 sm:px-6 text-[14px] xl:text-[16px] text-blue-500 underline underline-offset-1'
        href={url}
        target='_blank'
        rel='noreferrer'
      >
        {title}
      </a>
    </li>
  );
};

export default LinkItem;
