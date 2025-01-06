import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component

// Components for different pages
function Teams() {
  return <h2>Home Page</h2>;
}



// Main App component with routing
function App() {
  return (
    <Router>
      <div>
        {/* Include the Navbar */}
        <Navbar/>

        {/* Define Routes */}
        <Routes>
          <Route path="./pages/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
