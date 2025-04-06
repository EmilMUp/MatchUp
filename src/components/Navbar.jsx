// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="flex items-center space-x-4">
          <a
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Logga in
          </a>
          <a
            href="/register"
            className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md"
          >
            Registrera
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

