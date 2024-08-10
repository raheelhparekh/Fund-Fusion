import { React , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginAnimation.css';

function ApplicantLogin({changeRole}) {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleChangeRole = () => {
    setAnimate(true);
    setTimeout(() => {
      changeRole();
    }, 800); // Match this timeout duration to your animation duration
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/applicant/dashboard");
  };

  return (
    <div className="flex bg-red-700 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className={`w-3/4 bg-red-700 p-8 flex flex-col justify-center ${animate ? 'slide-out-right' : 'fade-in-fwd'}`}>
        <h2 className="text-white text-3xl font-bold mb-3">Travel Policy</h2>
        <p className="text-white mb-6">
          Our web application simplifies the process of requesting, approving, and managing financial support for research students and associates. With transparent communication and streamlined workflows, you can focus on what matters most: your research.
        </p>
        <h3 className="text-white text-xl font-bold">Validator?</h3>
        <p className="text-white mb-3">Go to Validator’s Sign in</p>
        <button className="bg-white text-red-700 px-3 py-1.5 rounded-full font-semibold shadow-md hover:bg-gray-100 transition" onClick={handleChangeRole}>Click Here</button>
      </div>

      <div className={`bg-white w-3/4 p-8 flex flex-col justify-center ${animate ? 'text-blur-out' : 'fade-in-fwd'}`}>
        <h2 className="text-2xl font-bold mb-3">Login for Applicants<span role="img" aria-label="wave">👋</span></h2>
        <button 
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-semibold mb-3 shadow-md flex items-center justify-center hover:bg-gray-200 transition-transform transform hover:scale-105"
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
        <p className="text-center text-gray-500 mb-3">or use email</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="password" placeholder="Password" className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-red-700 hover:underline">Forgot Password?</a>
          </div>
          <button 
            type="submit" 
            className="bg-red-700 text-white w-full py-2 rounded-lg font-semibold shadow-md hover:bg-red-800 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>

  )
}

export default ApplicantLogin
