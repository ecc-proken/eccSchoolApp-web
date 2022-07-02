import { memo, ReactNode, VFC } from 'react';
import NavItem from 'components/molecules/NavItem';
import Logo from 'assets/logo.svg';
import tabDataList from 'data/tabDataList';
import { useLocation } from 'react-router-dom';
import AnimationDiv from './AnimationDiv';
import Tabbar from 'components/molecules/Tabbar';

type Props = {
  children: ReactNode;
};
const Layout: VFC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className='min-h-full flex'>
      {/* side start */}
      <div className='sm:block hidden shadow-lg relative w-80'>
        <div className='bg-white h-fit rounded-2xl'>
          <div className='flex items-center justify-center pt-6'>
            <img src={Logo} alt='logo' className='h-16' />
          </div>
          <nav className='mt-6'>
            {tabDataList.map(({ icon, pageName, path }) => (
              <NavItem
                icon={icon}
                title={pageName}
                key={pageName}
                path={path}
                selected={pathname === path}
              />
            ))}
          </nav>
        </div>
      </div>
      {/* side end */}
      {/* footer menu start */}
      <Tabbar />
      {/* footer menu end */}
      <div className='h-screen w-full overflow-scroll pb-20 sm:pb-0'>
        <AnimationDiv className='w-full px-2 py-4'>{children}</AnimationDiv>
      </div>
    </div>
  );
};

export default memo(Layout);
