import './App.css';
import { Route, Routes } from 'react-router-dom';
import Info from './Components/Game Page/main_info/Info'
import Mission from './Components/Game Page/mission_info/Mission'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import Loading from './Components/Loading/Loading'

import React, { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 19000);
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/loading' element={<Loading />} />
        {/* <Route path='/intro' element={<Intro />} /> */}
      </Routes>
    </div>
  );
}

export default App;