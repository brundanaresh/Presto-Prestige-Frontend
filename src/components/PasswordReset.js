import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset = ({ history }) => {
  const [email, setEmail] = useState('');
  const [resetStatus, setResetStatus] = useState(null);
  const [isResetting, setIsResetting] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    if (isResetting) return; // Prevent multiple clicks

    setIsResetting(true);

    // Create an object to send in the request body
    const requestData = {
      email: email,
    };

    // Make an HTTP POST request using Axios to your API endpoint
    axios
      .post('https://jsonplaceholder.typicode.com', requestData)
      .then((response) => {
        console.log('Request Data:', requestData);
        // Optionally, set the reset status to indicate success
        setResetStatus('success');

        // Redirect to the confirmation page after a successful reset
        history.push('/passwordresetconfirmation');
      })
      .catch((error) => {
        console.error('Password reset request failed:', error);
        // Optionally, set the reset status to indicate an error
        setResetStatus('error');
      })
      .finally(() => {
        setIsResetting(false); // Re-enable the button after the request completes
      });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="mt-6 text-center text-xl font-extrabold text-black-900">Reset Password</h2>
      <p className="mb-4">
        Please enter your email address to receive a password reset link.
      </p>
      <form className="w-64">
        <div className="mb-4">
          <label htmlFor="email" className="block text-black-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button
          type="button"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
      </form>
      {resetStatus === 'success' && (
        <p className="text-green-600 mt-4">
          Password reset request successful. Check your email for instructions.
        </p>
      )}
      {resetStatus === 'error' && (
        <p className="text-red-600 mt-4">
          Request failed. Please try again later.
        </p>
      )}
    </div>
  );
};

export default PasswordReset;
