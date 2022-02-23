import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, VFC } from 'react';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import { useSetRecoilState } from 'recoil';
import userDataState from 'globalState/userDataState';
import NotFound from 'components/pages/NotFound';
import Timetable from 'components/pages/Timetable';
import { AnimatePresence } from 'framer-motion';

const App: VFC = () => {
  const setUserData = useSetRecoilState(userDataState);
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * localStorage に格納されている userData を取得し null でない場合 atom に格納する。
   * @date 2022-02-23
   * @returns {void}
   */
  const getUserDataHandler = () => {
    const userId = localStorage.getItem('userId');
    const password = localStorage.getItem('password');
    if (userId === null || password === null) navigate('/signin');
    setUserData({ userId, password });
  };
  useEffect(() => {
    getUserDataHandler();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
