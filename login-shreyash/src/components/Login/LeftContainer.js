import React, { useContext } from 'react'
import './styles.css'
import { AuthContext } from '../../contexts/UserContext';

const LeftContainer = () => {
    const { role, loginAsValidator, loginAsStudent } = useContext(AuthContext);
  return (
    <div className='left-container'>
      <h2 className='left-main-title'>Travel Policy</h2>
      <p className='left-para'>Our web application simplifies the process of requesting, approving, and managing financial support for research students and associates. With transparent communication and streamlined workflows, you can focus on 
        what matters most: your research.</p>
        <h4 className='left-validator'>Validator?</h4>
        <p className='left-goto'>Go to {role == 'validator' ? <>Validator’s</> : <>Student's</>} Sign in</p>
        <button className='left-click' onClick={role == 'validator' ? loginAsStudent : loginAsValidator}>Click Here</button>
    </div>
  )
}

export default LeftContainer
