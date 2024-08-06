import React from 'react'
import './ValidatorDisplay.css'

const ValidatorDisplay = ({changeRole}) => {
  return (
    <div className='left-container'>
      <h2 className='left-main-title'>Travel Policy</h2>
      <p className='left-para'>Our web application simplifies the process of requesting, approving, and managing financial support for research students and associates. With transparent communication and streamlined workflows, you can focus on 
        what matters most: your research.</p>
        <h4 className='left-validator'>Validator?</h4>
        <p className='left-goto'>Go to Sign in</p>
        <button onClick={()=>changeRole((prevRole)=>!prevRole)} className='left-click'>Click Here</button>
    </div>
  )
}

export default ValidatorDisplay
