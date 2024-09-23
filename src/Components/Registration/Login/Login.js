import React, { useContext, useEffect, useState } from 'react';
import './Login.css'
import { HashLink } from 'react-router-hash-link';
import loginimg from '../../Images/newloginimg.jpeg'
import Footer from '../../Footer/Footer';
import api from '../Api';
import { AuthContext } from '../../../AuthContext';
import { useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';


function Login() {

    // State to store the input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()

     // Check if the user is already logged in on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

    // Now, you can check if the user is logged in
    useEffect(() => {
      if (isLoggedIn) {
        console.log('User is logged in');
        // You can navigate or take some actions here if needed
      }
    }, [isLoggedIn]);


    const handleLogin = async () => {
      if (username === '' || password === '') {
        alert('Please Enter Username and Password');
        return;
      }
      try {
        // Send user input to the login API
        const response = await api.post('/auth/login', {
          username,
          password,
        });
    
        // Log the entire response to inspect it
        console.log(response.data);
    
        if (response.data && response.data.access) {
          console.log('Access Token:', response.data.access);        
    
          // Store tokens
          localStorage.setItem('accessToken', response.data.access);
    
          alert('Logged In Successfully');
          setPassword('');
          setUsername('');
          // navigate('/products');
        } else {
          console.error('Login failed: No access token in response');
        }
      } catch (error) {
        if (error.response) {
          console.error('Login failed:', error.response.data, error.response.status);
        } else if (error.request) {
          console.error('No response from server:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      }
    };
    
    
  
      // Handle logout
  const handleLogout = async () => {
    try {
      // Get the refresh token from cookies (or however it's stored)
      const refreshToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('refresh_token='))
        ?.split('=')[1];

      if (!refreshToken) {
        console.error('No refresh token found');
        return;
      }

      // Send the refresh token to logout endpoint
      await api.post('/auth/logout', {
        refresh_token: refreshToken
      });

      // Clear the localStorage and set login state to false
      localStorage.removeItem('accessToken');
      setIsLoggedIn(false);

      console.log('Logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
    }
  };


  return (
    <>
    <section className="vh-100" style={{marginTop:'5rem'}}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={loginimg} style={{backgroundColor:'white'}}
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-custome-fab btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-custome-fab btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-custome-fab btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="text" id="form3Example3" className="form-control form-control-md"
                  placeholder="Enter username" 
                  value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label className="form-label" htmlFor="form3Example3">Username</label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-md"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              {/* <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div> */}

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-custome-login btn-lg"
                  onClick={handleLogin}>Login</button>
                <p className="medium fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                <HashLink to='/register'>Register</HashLink></p>
              </div>

            </form>
          </div>
        </div>
      </div>

     
      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-black">
       
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>
        

        
        <div>
          <a href="https://www.facebook.com/people/Cellus-Tech-India-Private-Limited/100063859967855/" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        
      </div> */}
      
        </section>

   
    </>
  );
}

export default Login;