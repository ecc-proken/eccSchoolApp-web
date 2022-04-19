import tabDataList from 'data/tabDataList';
import { VFC } from 'react';
import TabItem from 'components/atoms/TabItem';
import { useLocation } from 'react-router-dom';

const Tabbar: VFC = () => {
  const { pathname } = useLocation();

  return (
    <div className='bg-gray-50 sm:hidden fixed bottom-0 left-0 w-full h-12 flex z-50'>
      {tabDataList.map(({ pageName, icon, path }) => (
        <TabItem
          key={pageName}
          icon={icon}
          title={pageName}
          path={path}
          selected={pathname === path}
        />
      ))}
    </div>
  );
};

export default Tabbar;
