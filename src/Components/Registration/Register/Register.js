import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';


function Register() {

  const [formData, setFormData]=useState({
    username:'',
    email:'',
    password:'',
    password2:''
  })
  const [error,setError]=useState('')
  const [success, setSuccess]=useState('')

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.password2) {
      setError('Passwords do not match');
      return;
    }

    // Check if password length is greater than 3 characters
    if (formData.password.length <= 3) {
      setError('Password must be greater than 3 characters');
      return;
    }

    try {
      const link=process.env.REACT_APP_BASE_URL
      const response = await axios.post(`${link}/auth/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
      });

      if (response.status == 201) {
        setSuccess('Account successfully created!');
        // Reset form data
        setFormData({
          username: '',
          email: '',
          password: '',
          password2: '',
        });
      }
    } 
    catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;

        // Check for specific error messages from the response
        if (errorData.username && errorData.username.length>0) {
          setError("Username already exists. Please choose a different one.");
        } else if (errorData.email && errorData.email.length>0) {
          setError("Email already exists. Please use a different email.");
        } else {
          setError(errorData.message || 'An error occurred during registration');
        }
      }else {
        setError('Failed to register. Please try again later.');
      }
    }
  };




  return (
    <>      
      <section className="background-radial-gradient overflow-hidden" style={{marginTop:'4rem'}}>
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{'zIndex': 10}}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{'color': 'hsl(218, 81%, 95%)'}}>
                The best offer <br />
                <span style={{'color': 'hsl(218, 81%, 75%)'}}>for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{'color': 'hsl(218, 81%, 85%)'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className=" px-4 py-4 px-md-6">
                  <form onSubmit={handleSubmit}>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row">                     
                      <div className="mb-4">
                        <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1">Username</label>
                          <input type="text" id="form3Example1" name='username' className="form-control" 
                          value={formData.username}
                          onChange={handleChange}
                          required/>
                        </div>
                      </div>

                      {/* <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div> */}

                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                      <input type="email" id="form3Example3" name='email' className="form-control" 
                      value={formData.email}
                      onChange={handleChange} required/>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                      <input type="password" id="form3Example4" name='password' className="form-control"
                      value={formData.password}
                      onChange={handleChange} required/>
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">Repeat Password</label>
                      <input type="password" id="form3Example4" name='password2' className="form-control" 
                      value={formData.password2}
                      onChange={handleChange} required/>
                    </div>

                    {/* <!-- Checkbox --> */}
                    {/* <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div> */}

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;