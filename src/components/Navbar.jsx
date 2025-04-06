// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import LoginButton from './LoginButton';
import '../styles/Navbar.css'; 


const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <a href="/">MinLogga</a>
        </div>

        {/* Links */}
         {/* Links */}
         <div className="flex items-center space-x-4">
          <Register />
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

