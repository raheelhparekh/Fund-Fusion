import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginAnimation.css';

function ValidatorLogin({ changeRole }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: 'hod.comps.kjsce@example.com', password: 'securePassword123' });
  const [animate, setAnimate] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleChangeRole = () => {
    setAnimate(true);
    setTimeout(() => {
      changeRole();
    }, 800); // Ensure this matches your CSS animation duration
  };

  // Basic email validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!credentials.email || !credentials.password) {
      setError('Please enter both email and password.');
      return;
    }

    // Validate email format
    if (!validateEmail(credentials.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true); // Show loading state
    setError(''); // Reset previous errors

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/validator-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const result = await response.json();
      if (response.ok) {
        // Handle successful login (navigate, store tokens, etc.)
        navigate("/validator/dashboard");
      } else {
        setError(result.message || 'Invalid login credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-red-700 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className={`bg-white w-full md:w-3/4 p-8 flex flex-col justify-center ${animate ? 'text-blur-out' : 'fade-in-fwd'}`}>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3">Login for Validator<span role="img" aria-label="wave">👋</span></h2>
        <button 
          type='button'
          className="bg-gray-100 text-gray-700 text-sm md:text-base px-4 py-2 rounded-full font-semibold mb-3 shadow-md flex items-center justify-center hover:bg-gray-200 transition-transform transform hover:scale-105"
          onClick={handleSubmit}
        >
          <svg
            className="w-6 h-6 mr-2" // Adjust the size of the icon if needed
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29.074 13.3887H28V13.3333H16V18.6667H23.5354C22.436 21.7713 19.482 24 16 24C11.582 24 8.00002 20.418 8.00002 16C8.00002 11.582 11.582 8 16 8C18.0394 8 19.8947 8.76934 21.3074 10.026L25.0787 6.25467C22.6974 4.03534 19.512 2.66667 16 2.66667C8.63669 2.66667 2.66669 8.63667 2.66669 16C2.66669 23.3633 8.63669 29.3333 16 29.3333C23.3634 29.3333 29.3334 23.3633 29.3334 16C29.3334 15.106 29.2414 14.2333 29.074 13.3887Z" fill="#FFC107"/>
            <path d="M4.20398 9.794L8.58465 13.0067C9.76998 10.072 12.6406 8 16 8C18.0393 8 19.8946 8.76934 21.3073 10.026L25.0786 6.25467C22.6973 4.03534 19.512 2.66667 16 2.66667C10.8786 2.66667 6.43731 5.558 4.20398 9.794Z" fill="#FF3D00"/>
            <path d="M16 29.3333C19.444 29.3333 22.5733 28.0153 24.9393 25.872L20.8127 22.38C19.429 23.4323 17.7383 24.0014 16 24C12.532 24 9.58734 21.7887 8.478 18.7027L4.13 22.0527C6.33667 26.3707 10.818 29.3333 16 29.3333Z" fill="#4CAF50"/>
            <path d="M29.074 13.3887H28V13.3333H16V18.6667H23.5353C23.0095 20.1443 22.0622 21.4354 20.8107 22.3807L20.8127 22.3793L24.9393 25.8713C24.6473 26.1367 29.3333 22.6667 29.3333 16C29.3333 15.106 29.2413 14.2333 29.074 13.3887Z" fill="#1976D2"/>
          </svg>
          Login With Google
        </button>
        <p className="text-center text-gray-500 text-xs md:text-sm mb-3">or use email</p>

        {/* Display Error Message */}
        {error && <div className="text-red-600 text-sm mb-3">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Email" 
            className="w-full mb-3 p-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
            value={credentials.email} 
            onChange={(event) => setCredentials(prev => ({ ...prev, email: event.target.value }))} 
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full mb-3 p-2 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
            value={credentials.password} 
            onChange={(event) => setCredentials(prev => ({ ...prev, password: event.target.value }))} 
          />

          <div className="flex flex-col md:flex-row items-center justify-between mb-3">
            <label className="flex items-center mb-2 md:mb-0 text-sm md:text-base">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-red-700 text-sm md:text-base hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className={`bg-red-700 text-white text-sm md:text-base w-full py-2 rounded-lg font-semibold shadow-md hover:bg-red-800 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>

      <div className={`w-full md:w-3/4 bg-red-700 p-4 flex flex-col justify-center ${animate ? 'slide-out-left' : 'fade-in-fwd'}`}>
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3 hidden md:block">Travel Policy</h2>
        <p className="text-white text-sm md:text-base mb-6 hidden md:block">
          Our web application simplifies the process of requesting, approving, and managing financial support for research students and associates.
        </p>
        <h3 className="text-white text-lg md:text-xl font-bold">Applicant?</h3>
        <p className="text-white mb-3">Go to Applicant’s Sign in</p>
        <button type='button' className="bg-white text-red-700 text-sm md:text-base px-3 py-1.5 rounded-full font-semibold shadow-md hover:bg-gray-100 transition" onClick={handleChangeRole}>Click Here</button>
      </div>
    </div>
  );
}

export default ValidatorLogin;
