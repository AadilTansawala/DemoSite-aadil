import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';

export default function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home loggedInUser={loggedInUser}/>} /> 
        <Route path="/about" element={<About loggedInUser={loggedInUser}/>} />
        <Route path="/SignUp" element={<SignUp loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}  />} />
      </Routes>
    </BrowserRouter>
  )
}