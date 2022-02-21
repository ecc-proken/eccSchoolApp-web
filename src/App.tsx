import { Route, Routes } from 'react-router-dom';
import { VFC } from 'react';

const App: VFC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<>Home</>} />
        <Route path='/auth' element={<>Authentication</>} />
      </Routes>

      <h1 className='text-center bg-slate-400 font-bold underline'>
        Hello world!
      </h1>
    </div>
  );
};

export default App;
