import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Cards from './components/Cards'
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
  
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<>
            <Main />
            <Cards />
          </>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Lägg till fler rutter här vid behov */}
        </Routes>
      </main>
      <Footer />
    </Router>
    
  );
};

export default App;
