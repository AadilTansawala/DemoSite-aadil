import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../image/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = ({ loggedInUser, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    handleLogout();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between m-8 max-md:m-0 mb-0 p-8 bg-gradient-to-r from-orange-300 to-orange-400'>
      <Link to="/">
        <div className="flex items-center mb-4 md:mb-0">
          <img className="h-8 mr-3 rounded-full" src={Logo} alt="Logo" />
          <span className="text-neutral-100 text-lg font-semibold">Mamo</span>
        </div>
      </Link>

      <button
        className="absolute top-8 right-16 md:hidden text-white w-5 text-4xl"
        onClick={toggleMenu}
      >
        {menuOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
      </button>

      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-x-16 space-y-4 md:space-y-0 md:space-x-24 pt-1`}
      >
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
};

export default Navbar;
