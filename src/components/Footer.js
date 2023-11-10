import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
    <div className="flex justify-center space-x-4 mb- md:mb-2 md:justify-center"> 
     

      <div className="hidden md:block">
        <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
      <div className="flex space-x-4">
      
        <a
          href="https://www.facebook.com/your-facebook-page-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <img
            src="/Facebook.png" // Replace with the actual path to your Facebook icon image
            alt="Facebook"
            className="h-6 w-6"
          />
        </a>
        
        
        <a
          href="https://www.instagram.com/your-instagram-page-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <img
            src="/Instagram.png" // the actual path to your Instagram icon image
            alt="Instagram"
            className="h-6 w-6"
          />
        </a>
        
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <img
            src="/Gmail.png" //the actual path to your Gmail icon image
            alt="Gmail"
            className="h-6 w-6"
          />
        </a>
        
        
        <a
          href="https://www.twitter.com/your-twitter-page-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <img
            src="/Twitter.png" // the actual path to your Twitter icon image
            alt="Twitter"
            className="h-6 w-6"
          />
        </a>
      </div>
      
    
    
    <div className="flex justify-center md:justify-end"> 
      <ul className="flex flex-wrap justify-end space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
      </ul>
    </div>
  </div>

  <div className="text-center mt-4 md:hidden"> 
    <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;
