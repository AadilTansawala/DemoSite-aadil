import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../image/logo.png";

const Navbar = ({ loggedInUser, handleLogout }) => {
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div className='flex flex-col lg:flex-row justify-between m-8 mb-0 p-8 bg-gradient-to-r from-orange-300 to-orange-400'>
      <Link to="/">
        <div className="flex items-center mb-4 md:mb-0">
          <img className="h-8 mr-3 rounded-full" src={Logo} alt="Logo" />
          <span className="text-neutral-100 text-lg font-semibold">Mamo</span>
        </div>
      </Link>

      <h1 className='text-2xl text-neutral-300 font-mono mb-4 md:mb-0'>
        {loggedInUser ? (
          <span className='text-neutral-100 text-4xl font-bold pl-2'>
            Welcome {loggedInUser.firstName}
          </span>
        ) : (
          <span className='text-neutral-100 text-2xl font-bold pl-2'>Please login/signup</span>
        )}
      </h1>

      <ul className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-24 pt-1">
        <Link to="/">
          <li className='text-neutral-100'>Home</li>
        </Link>
        <Link to="/about">
          <li className='text-neutral-100'>About</li>
        </Link>
        {loggedInUser ? (
          <li className='text-neutral-100 cursor-pointer' onClick={handleLogoutClick}>
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
