import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, VFC } from 'react';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import { useSetRecoilState } from 'recoil';
import userDataState from 'globalState/userDataState';
import NotFound from 'components/pages/NotFound';

const App: VFC = () => {
  const setUserData = useSetRecoilState(userDataState);
  const navigate = useNavigate();

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
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
