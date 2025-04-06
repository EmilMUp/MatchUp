// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
      {/* Vänster: Logga eller text */}
      <p className="text-sm">&copy; {new Date().getFullYear()} MittProjekt. Alla rättigheter förbehållna.</p>

      {/* Höger: Länkar */}
      <div className="flex space-x-4 mt-2 sm:mt-0">
        <a href="/about" className="text-sm hover:underline">
          Om oss
        </a>
        <a href="/contact" className="text-sm hover:underline">
          Kontakt
        </a>
        <a href="/privacy" className="text-sm hover:underline">
          Integritet
        </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;