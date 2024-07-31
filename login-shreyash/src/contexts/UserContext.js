import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(null);

    const loginAsStudent = () => {
        setRole('student');
    };

    const loginAsValidator = () => {
        setRole('validator');
    };

    const logout = () => {
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{ role, loginAsStudent, loginAsValidator, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
