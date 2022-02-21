import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<>Home</>} />
        <Route path='/auth' element={<>Authentication</>} />
      </Routes>
    </div>
  );
}

export default App;
