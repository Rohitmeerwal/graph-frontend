
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/graphql', {
        query: `
          mutation {
            logout(token: "${localStorage.getItem('token')}") {
              message
            }
          }
        `
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  </div>
  
  );
};

export default Dashboard;
