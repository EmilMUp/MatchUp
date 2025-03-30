// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Hem</Link></li>
          <li><Link to="/Teams" className="nav-link">Teams</Link></li>
          <li><Link to="/Contact" className="nav-link">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

