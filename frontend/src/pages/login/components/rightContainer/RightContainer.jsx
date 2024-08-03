import React from 'react'
import './RightContainer.css'

const RightContainer = () => {
  return (
    <div className='right-container'>
        <div className='right-container-child'>
        <h2 className='right-main-title'>Welcome Back 👋</h2>
      <button className='right-login-google'><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.074 13.3887H28V13.3333H16V18.6667H23.5354C22.436 21.7713 19.482 24 16 24C11.582 24 8.00002 20.418 8.00002 16C8.00002 11.582 11.582 8 16 8C18.0394 8 19.8947 8.76934 21.3074 10.026L25.0787 6.25467C22.6974 4.03534 19.512 2.66667 16 2.66667C8.63669 2.66667 2.66669 8.63667 2.66669 16C2.66669 23.3633 8.63669 29.3333 16 29.3333C23.3634 29.3333 29.3334 23.3633 29.3334 16C29.3334 15.106 29.2414 14.2333 29.074 13.3887Z" fill="#FFC107"/>
<path d="M4.20398 9.794L8.58465 13.0067C9.76998 10.072 12.6406 8 16 8C18.0393 8 19.8946 8.76934 21.3073 10.026L25.0786 6.25467C22.6973 4.03534 19.512 2.66667 16 2.66667C10.8786 2.66667 6.43731 5.558 4.20398 9.794Z" fill="#FF3D00"/>
<path d="M16 29.3333C19.444 29.3333 22.5733 28.0153 24.9393 25.872L20.8127 22.38C19.429 23.4323 17.7383 24.0014 16 24C12.532 24 9.58734 21.7887 8.478 18.7027L4.13 22.0527C6.33667 26.3707 10.818 29.3333 16 29.3333Z" fill="#4CAF50"/>
<path d="M29.074 13.3887H28V13.3333H16V18.6667H23.5353C23.0095 20.1443 22.0622 21.4354 20.8107 22.3807L20.8127 22.3793L24.9393 25.8713C24.6473 26.1367 29.3333 22.6667 29.3333 16C29.3333 15.106 29.2413 14.2333 29.074 13.3887Z" fill="#1976D2"/>
</svg>
Login With Google</button>
      <div className='or-use-email'>
        <span></span>
        <span className='or-use-email-text'>or use email</span>
        <span></span>
      </div>
      <div className='right-login-form'>
        <label>
            Email
        <input type="email" placeholder="Email" />

        </label>
        <label>
            Password
        <input type='password' placeholder='Password' />

        </label>
        <div className='right-login-remember'>
            <label  id='remember-input'>
            <input type='checkbox'placeholder='checkbox' />
            remember me
            </label>
            <a>Forgot Password</a>
        </div>
      </div>
      <button className='right-login-btn'>Log in</button>
        </div>
    </div>
  )
}

export default RightContainer
