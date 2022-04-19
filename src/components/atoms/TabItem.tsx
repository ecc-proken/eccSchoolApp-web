import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  icon: IconProp;
  title: string;
  path: `/${string}`;
  selected: boolean;
};

const TabItem: VFC<Props> = ({ icon, title, path, selected }) => {
  return (
    <Link
      className={`w-full h-full uppercase flex flex-col items-center transition-colors duration-200 justify-center border-t pt-2 ${
        selected ? 'text-accent' : 'text-gray-500 hover:text-accent'
      }`}
      to={path}
    >
      <FontAwesomeIcon icon={icon} className='text-xl mb-1' />
      <span className='text-[0.5625rem] font-normal'>{title}</span>
    </Link>
  );
};

export default memo(TabItem);
