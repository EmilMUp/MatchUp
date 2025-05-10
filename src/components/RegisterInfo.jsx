import React from 'react';
import '../styles/Navbar.css'; 


const RegisterInfo = () => {
  return (
    
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg flex items-start space-x-4">
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">Viktig information</h3>
        <p className="text-gray-600">
          När du registerar ditt lag så kommer vi först att kontrollera så att allt stämmer och att det verkligen är du som är ansvarig för laget.
          Efter det så kommer vi skicka ett mail till dig och du kan logga in och börja att leta efter motståndare.
        </p>
      </div>
    </div>
    
  );
};

export default RegisterInfo;
