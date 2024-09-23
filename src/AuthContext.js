import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie
import api from './Components/Registration/Api';
import { useNavigate } from 'react-router-dom'; // For navigation


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken, { secure: true, sameSite: 'Strict' }); // Store refresh token in cookies
    setIsLoggedIn(true);
  };

  const logout = async () => {
    const refreshToken = Cookies.get('refreshToken'); // Get refresh token from cookies

    if (refreshToken) {
      try {
        await api.post('/auth/logout', {
          refresh: refreshToken,
        });
        // Clear tokens after successful logout
        localStorage.removeItem('accessToken');
        Cookies.remove('refreshToken'); // Remove refresh token from cookies
        setIsLoggedIn(false);
        alert('Logged out successfully');
        navigate('/'); // Navigate to login page after logout
      } catch (error) {
        console.error('Logout failed:', error);
      }
    } else {
      // If no refresh token, just log out
      setIsLoggedIn(false);
      localStorage.removeItem('accessToken');
      Cookies.remove('refreshToken');
      navigate('/');
    }
  };

  const checkTokenExpiryAndLogout = () => {
    // Automatically logout if the refresh token has expired
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      logout(); // Call the logout function if refreshToken is not available (expired or invalid)
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, checkTokenExpiryAndLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
