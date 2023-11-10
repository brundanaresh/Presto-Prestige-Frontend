import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:8003/api/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data.message);
        alert(data.message);
      } else {
        console.error('Signup error:', response.statusText);
        alert('Signup failed. User Already exists.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please Try Again.');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="mt-6 text-center text-xl font-extrabold text-black-900">Sign Up</h2>
      <form className="w-64">
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-medium text-black-700">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 mt-1 border border-black-300 rounded"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium text-black-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-black-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium text-black-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
