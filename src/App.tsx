import { Route, Routes } from 'react-router-dom';
import { useEffect, VFC } from 'react';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import { useSetRecoilState } from 'recoil';
import userDataState from 'globalState/userDataState';

const App: VFC = () => {
  const setUserData = useSetRecoilState(userDataState);
  /**
   * localStorage に格納されている userData を取得し atom に格納している。
   * @date 2022-02-23
   * @returns {void}
   */
  const getUserDataHandler = () => {
    const userId = localStorage.getItem('userId');
    const password = localStorage.getItem('password');
    setUserData({ userId, password });
  };
  useEffect(() => getUserDataHandler(), []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
};

export default App;
