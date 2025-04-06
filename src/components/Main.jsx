import React from 'react'
import Register from './Register';
import LoginButton from './LoginButton';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <section
    className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
    style={{ backgroundImage: `url('/din-bild.jpg')` }} // Ändra till din bild
  >
    {/* Mörk overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50" />

    {/* Innehåll */}
    <div className="relative z-10 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
        Välkommen till MittProjekt
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Börja ditt äventyr med ett konto idag!
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <LoginButton />
      <Register />
    </div>  
    </div>
  </section>
  );
};

export default Home
