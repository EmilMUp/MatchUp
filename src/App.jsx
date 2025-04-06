import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Cards from './components/Cards'

const App = () => {
  return (
    <>
    <Navbar />
    <main>
    <Main />
    <Cards />
    </main>
    <Footer />
    </>
  );
};

export default App;
