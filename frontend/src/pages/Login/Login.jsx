import React, { useState } from 'react';

import './Login.css';
import loginPageBg from '/images/campus_bg.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicantLogin  from './components/ApplicantLogin';
import ValidatorLogin from './components/ValidatorLogin';

const Login = () => {
  const [isApplicant, setIsApplicant] = useState(true);

  const toggleRole = () => {
    setIsApplicant(!isApplicant);
  };

  return (
    <div className="login-page">
      <img src={loginPageBg} className='loginPage_bg' />
      <div className='login'>
        <div className={`login-container`}>
          {isApplicant ? (
              <>
                <ApplicantLogin changeRole={toggleRole} />
              </>
            ) : (
              <>
                <ValidatorLogin changeRole={toggleRole} />
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
