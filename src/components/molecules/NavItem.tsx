import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  icon: IconProp;
  title: string;
  path: `/${string}`;
  selected?: boolean;
};
const NavItem: VFC<Props> = ({ icon, title, path, selected = false }) => {
  return (
    <Link
      className={[
        'w-full uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start',
        selected
          ? 'text-accent bg-gradient-to-r from-white to-blue-100  border-r-4 border-accent'
          : 'text-gray-500 hover:text-accent hover:bg-gray-100',
      ].join(' ')}
      to={path}
    >
      <FontAwesomeIcon icon={icon} className='text-xl' />
      <span className='mx-4 text-base font-normal'>{title}</span>
    </Link>
  );
};

export default NavItem;
