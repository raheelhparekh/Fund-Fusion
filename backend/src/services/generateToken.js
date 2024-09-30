import jwt from 'jsonwebtoken';

function generateToken(tokenObject) {

    return jwt.sign(
        tokenObject,
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
}

export default generateToken;