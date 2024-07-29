
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">Home Page</h1>
    <div className="space-y-4 space-x-10">
      <button 
        onClick={handleRegister} 
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Register
      </button>
      <button 
        onClick={handleLogin} 
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
      >
        Login
      </button>
    </div>
  </div>
  );
};

export default HomePage;
