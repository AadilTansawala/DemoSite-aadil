import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../image/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='flex justify-between m-8 mb-0 p-8 bg-gradient-to-r from-orange-300 to-orange-400'>
      <Link to="/">
        <div className="flex items-center mr-8">
          <img className="h-8 mr-3 rounded-full" src={Logo} alt="Logo"/>
          <span className="text-neutral-100 text-lg font-semibold">Mamo</span>
        </div>
      </Link>

      <h1 className='text-2xl text-neutral-300 font-mono'>
        Welcome <span className='text-neutral-100 text-4xl font-bold pl-2'>AAdil</span>
      </h1>

      <ul className="flex justify-between space-x-24 pt-1">
        <Link to="/">
          <li className='text-neutral-100'>Home</li>
        </Link>
        <Link to="/about">
          <li className='text-neutral-100'>About</li>
        </Link>
        {isLoggedIn ? (
          <li className='text-neutral-100 cursor-pointer' onClick={handleLogout}>
            Logout
          </li>
        ) : (
          <Link to="/SignUp">
            <li className='text-neutral-100'>Login/Signup</li>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
