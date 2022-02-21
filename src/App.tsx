import { Route, Routes } from 'react-router-dom';
import { VFC } from 'react';

const App: VFC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<>Home</>} />
        <Route path='/auth' element={<>Authentication</>} />
      </Routes>
    </div>
  );
};

export default App;
