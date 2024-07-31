import React from 'react'
import LeftContainer from '../components/Login/LeftContainer'
import RightContainer from '../components/Login/RightContainer'

const Login = () => {
  return (
    <div className='login'>
      <img src='/images/campus_bg.jpeg' className='App_bg' />

          <div className='login-container'>
      <LeftContainer />
      <RightContainer />
    </div>
    </div>
  )
}

export default Login
