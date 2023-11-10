import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetStatus, setResetStatus] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      setResetStatus('error');
      return;
    }
    try {
      console.log('Before sending request');
      const response = await axios.post('https://jsonplaceholder.typicode.com', {
        email,
         confirmPassword,
        newPassword,
       
      });
      console.log('After successful request');
      // ...
    } catch (error) {
      console.error('Password reset request failed:', error);
      // ...
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="mt-6 text-center text-xl font-extrabold text-black-900">Password Reset</h2>
      <form className="w-64" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full p-2 border border-black-300 rounded"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-black-700 font-medium">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-black-700 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {resetStatus === 'error' && (
          <p className="text-red-600 mt-2">Password reset failed. Please try again.</p>
        )}
        {resetStatus === 'success' && (
          <p className="text-green-600 mt-2">Password reset successful. You can now sign in.</p>
        )}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
      <p className="mt-4">
        Remember your password?{' '}
        <Link to="/login" className="text-blue-500">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default PasswordResetPage;
