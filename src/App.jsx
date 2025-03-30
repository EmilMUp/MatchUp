import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Teams" element={<Teams />} />
        </Routes>
    </Router>
  );
};

export default App;
