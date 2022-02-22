import { Route, Routes } from 'react-router-dom';
import { VFC } from 'react';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';

const App: VFC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
};

export default App;
