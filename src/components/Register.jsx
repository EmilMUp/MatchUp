import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register'); // Navigera till RegisterPage
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
      Registrera dig
    </button>
  );
};

export default RegisterButton;