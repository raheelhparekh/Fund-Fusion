import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  function handleApplicantLogin(event){
    event.preventDefault()

    //@Anamay JWT here




    navigate('/applicant')
  }

  function handleValidatorLogin(event){
    event.preventDefault()

    //@Anamay JWT here


    
    navigate('/validator')

  }

  return (
  <div className='login--container'>
    <div className='login--box'>
      <form onSubmit={handleValidatorLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <input name='uniqueIdentifier'/>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password'/>
        </div>

        <button id='validatorLogin'>Log In As Validator</button>
      </form>
    </div>


    <div className='login--box'>
      <form onSubmit={handleApplicantLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <input name='uniqueIdentifier'/>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password'/>
        </div>

        <button id='applicantLogin'>Log In As Applicant</button>
      </form>
    </div>
  </div>
  )
}


export default Login
