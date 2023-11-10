// Login.js
import React, { useState } from 'react';
import axios from 'axios'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    if (!isValidEmail(inputEmail)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);

    if (inputPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
  
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }
  
    try {
      console.log('Data to send:', { email, password });
      const response = await fetch('http://localhost:8003/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);
      
  
      if (response.status === 200) {
        // Handle successful login here
        console.log('Login successful');
      } else {
        // Handle login error here
        console.error('Login error:', response.data);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
        
          <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-black-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full p-3 border rounded-md"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-600">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-black-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full p-3 border rounded-md"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="mt-2 text-sm text-red-600">{passwordError}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            <a href="/forgotpassword" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot Password?
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
