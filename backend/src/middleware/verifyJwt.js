import jwt from 'jsonwebtoken';

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
            department : payload.department
        };
    
        if (req.user && req.user.designation === 'Student' || 'Faculty') {
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
            department : payload.department
        }

        if (req.user && req.user.designation === "Supervisor" || "HOD" || "HOI") {
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
          department : payload.department
      }

      if (req.user && req.user.designation === 'Student' || 'Faculty' || "Supervisor" || "HOD" || "HOI") {
          next();
      } else {
          return res.status(401).json({message:"Access denied. Not a validator."});
      }

  })
};

export { verifyApplicantToken, verifyValidatorToken, verifyToken} ;