import React from 'react'
import LeftContainer from '../login/components/leftContainer/LeftContainer'
import RightContainer from '../login/components/rightContainer/RightContainer'
import Navbar from './components/navbar/Navbar'

import './Login.css'
import loginPageBg from '/images/campus_bg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  
  return (
    <div className="login-page">
      <Navbar />
      <div className='login'>
        <img src={loginPageBg} className='loginPage_bg' />

        <div className='login-container'>
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </div>
  )
}

export default Login
