import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Instruct from './pages/Intruct';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=''>
      <div className="min-h-screen bg-richblack-900 flex-col flex">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Instruct/>}/>
        <Route path='/posts' element={<Home setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
