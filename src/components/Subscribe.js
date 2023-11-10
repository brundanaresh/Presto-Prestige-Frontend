import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // Add state for valid email
  const [showBenefits, setShowBenefits] = useState(false); // Add state for showing benefits
  const [showButton, setShowButton] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = emailPattern.test(inputEmail);
    setIsValidEmail(isEmailValid);
    setShowButton(isEmailValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is valid before proceeding
    if (!isValidEmail) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubscribed(true);
  };
  const renderButton = showButton && (
    <button
      type="button"
      className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
      onClick={handleSubmit}
      tyle={{ width: '80%' }} 
    >
      Subscribe Now
    </button>
  ); 

  const toggleAccordion = () => {
    setShowBenefits(!showBenefits); 
  };

  return (
    <div className="min-h-screen relative">
     
   
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-md w-full">
          <div>
            <h2 className="relative z-10 bg-white bg-opacity-75 p-4 rounded-md mt-6 text-center text-xl font-extrabold text-gray-900">
              Unlock The Secrets Of Magic!
            </h2>
          </div>

          <div className="mb-8 flex flex-col items-center justify-center space-y-4">
  <label htmlFor="email" className="block font-medium text-black-700">
   
  </label>

  <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    required
    className={`mb-5 p-3 border rounded-md ${!isValidEmail ? 'border-red-500' : ''}`}
    placeholder="Enter Email"
    value={email}
    onChange={handleEmailChange}
    style={{ width: '80%' }} 
  />
  {!isValidEmail && (
    <p className="mt-1 text-red-500">Please enter a valid email address</p>
  )}
</div>



{showButton && (
  <>
  <div className="flex items-center justify-center">
    <button

      type="button"
      className="w-full py-4 px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
      onClick={handleSubmit}
      style={{ width: '80%' }} 

    >
      Subscribe Now
    </button>
    </div>
  </>
)}


          {subscribed ? (
            <div className="text-center">
              <p>Thank you for subscribing ❤️</p>
              <p>Follow Us on Social Media for More Magic. </p>
              <span role="img" aria-label="Heart Emoji" className="text-2xl">
                

    
              </span>
            </div>
          ) : (
            <>
              <section className="bg-white-100 p-8 relative z-8 space-y-3 space-x-5">
                <h2 className="text-lg font-semibold mb-2">
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={toggleAccordion}
                  >
                    {showBenefits ? '' : ''} Benefits of Subscribing
                  </button>
                </h2>
                {showBenefits && (
                  <ul className="list-disc list-inside">
                    <li>Exclusive Magic Tutorials</li>
                    <li>Behind-the-Scenes Access</li>
                    <li>Discounts on Shows and Merchandise</li>
                  </ul>
                )}
              </section>
              <section className="bg-white-100 p-8 relative z-8 space-y-3 space-x-5" >
                <h2 className="text-lg font-semibold mb-2">
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={toggleAccordion}
                  >
                    {showBenefits ? '' : ''} What You'll Receive
                  </button>
                </h2>
                {showBenefits && (
                  <ul className="list-disc list-inside">
                    <li>Weekly Magic Tips</li>
                    <li>Exclusive Trick Reveals</li>
                    <li>Special offers and Discounts</li>
                  </ul>
                )}
              </section>

            
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
