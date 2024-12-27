import jwt from 'jsonwebtoken';
import { applicantDesignations, validatorDesignations } from '../config/designations.js';

const verifyApplicantToken = (req, res, next) => {

    const token = req.cookies.access_token;
    
    if (!token) {
        return res.status(401).json({message: "No token found"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err,payload)=>{
        
        if (err) {
            return res.status(403).json({message:"Invalid Token"});
        }

        req.user = {
            id : payload.id,
            designation : payload.designation,
            department : payload.department,
            institute : payload.institute,
            role : payload.role
        };
    
        if (req.user && applicantDesignations.includes(req.user.designation)) {
            next();
        } else {
            return res.status(401).json({message : "Access denied. Not a applicant."});
        }

    })
};

const verifyValidatorToken = (req, res, next) => {

    const token = req.cookies.access_token;
    
    if (!token) {
        return res.status(401).json({message: "No token found"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err,payload)=>{
        
        if (err) {
            return res.status(403).json({message:"Invalid Token"});
        }

        req.user = {
            id : payload.id,
            designation : payload.designation,
            department : payload.department,
            institute : payload.institute,
            role : payload.role
        }

        if (req.user && validatorDesignations.includes(req.user.designation)) {
            next();
        } else {
            return res.status(401).json({message:"Access denied. Not a validator."});
        }

    })
};

const verifyToken = (req, res, next) => {

  const token = req.cookies.access_token;
  
  if (!token) {
      return res.status(401).json({message: "No token found"});
  }

  jwt.verify(token, process.env.JWT_SECRET, (err,payload)=>{
      
      if (err) {
          return res.status(403).json({message:"Invalid Token"});
      }

      req.user = {
          id : payload.id,
          designation : payload.designation,
          department : payload.department,
          institute : payload.institute,
          role : payload.role
      }

      if (req.user && [...applicantDesignations ,...validatorDesignations].includes(req.user.designation)) {
          next();
      } else {
          return res.status(401).json({message:"Access denied. Not a validator."});
      }

  })
};

export { verifyApplicantToken, verifyValidatorToken, verifyToken} ;