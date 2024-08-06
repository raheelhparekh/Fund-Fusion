import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../image/BG-login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // Trigger login in parent component
    navigate('/'); // Redirect to the dashboard after login
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="w-1/2 bg-red-700 p-12 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">Travel Policy</h2>
          <p className="text-white mb-8">
            Our web application simplifies the process of requesting, approving, and managing financial support for research students and associates. With transparent communication and streamlined workflows, you can focus on what matters most: your research.
          </p>
          <h3 className="text-white text-xl font-bold">Validator?</h3>
          <p className="text-white mb-4">Go to Validator’s Sign in</p>
          <button className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">Click Here</button>
        </div>
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back <span role="img" aria-label="wave">👋</span></h2>
          <button 
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-semibold mb-4 shadow-md flex items-center justify-center hover:bg-gray-200 transition"
            onClick={handleLogin}
          >
            <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
            Login With Google
          </button>
          <p className="text-center text-gray-500 mb-4">or use email</p>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <input type="email" placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="password" placeholder="Password" className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-red-700 hover:underline">Forgot Password?</a>
            </div>
            <button 
              type="submit" 
              className="bg-red-700 text-white w-full py-3 rounded-lg font-semibold shadow-md hover:bg-red-800 transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;