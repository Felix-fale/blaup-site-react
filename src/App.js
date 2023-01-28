import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './common/Navbar/Navbar';

function App() {
  return (
    <>
      <Routes>
      
        <Route path='/' element={<Navbar/>} ></Route>
      </Routes>
    </>
  );
}

export default App;
// https://www.youtube.com/watch?v=YzlvtlWqnn0&t=674s   .... 28m00s