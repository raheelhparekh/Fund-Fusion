import React, { useState } from 'react'
import ApplicantDisplay from './components/applicantDisplay/ApplicantDisplay'
import ApplicantForm from './components/applicantForm/ApplicantForm'
import ValidatorForm from './components/validatorForm/ValidatorForm'
import ValidatorDisplay from './components/validatorDisplay/ValidatorDisplay'

import './Login.css'
import loginPageBg from '/images/campus_bg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [isApplicant,setIsApplicant] = useState(true);
  return (
    <div className="login-page">
      <div className='login'>
        <img src={loginPageBg} className='loginPage_bg' />

        <div className='login-container'>

          {isApplicant ?
          <>
            <ApplicantDisplay  changeRole={setIsApplicant}/>
            <ApplicantForm/>
          </>
          :
          <>
            <ValidatorForm/>
            <ValidatorDisplay changeRole={setIsApplicant}/>
          </>
          }

        </div>
      </div>
    </div>
  )
}

export default Login
