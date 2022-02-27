import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, VFC } from 'react';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import { useRecoilValue } from 'recoil';
import userDataState from 'globalState/userDataState';
import NotFound from 'components/pages/NotFound';
import Timetable from 'components/pages/Timetable';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const App: VFC = () => {
  const userData = useRecoilValue(userDataState);
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * userData を取得し null の場合は signin に遷移する
   * @date 2022-02-23
   * @returns {void}
   */
  useEffect(() => {
    if (userData.userId === null || userData.password === null)
      navigate('/signin');
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/timetable' element={<Timetable />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
