
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/graphql', {
        query: `
          mutation {
            register(username: "${username}", email: "${email}", password: "${password}") {
              token
            }
          }
        `
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      localStorage.setItem('token', response.data.data.register.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  </div>
</div>

  );
};

export default Register;
