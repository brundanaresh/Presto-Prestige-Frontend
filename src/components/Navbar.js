import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderDropdown = () => {
    if (!menuOpen) {
      return null;
    }

    const dropdownLinks = [
      { to: '/', text: 'Home' },
      { to: '/blog', text: 'Blog' },
      { to: '/subscribe', text: 'Subscribe' },
      { to: '/about', text: 'About' },
      { to: '/login', text: 'Login' },
      { to: '/SignUp', text: 'SignUp' },
    ];

    return (
      <div className="mr-0 pl-0 px-9 absolute w-96 right-0 py-12 text-black bg-white mobile-dropdown top-19 min-h-[500px] space-y-12">
        {dropdownLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`block px-4 link ${menuOpen ? 'text-on-white-background' : ''}`}
            onClick={closeMenu}
          >
            {link.text}
          </Link>
        ))}
        </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-white shadow-0 navbar">
      
      <div className="font-sans text-2xl font-bold text-black logo">Presto Prestige</div>

      <ul className="hidden space-x-4 font-mono bg-transparent lg:flex">
        <li><Link to="/" className="text-black">Home</Link></li>
        <li><Link to="/blog" className="text-black">Blog</Link></li>
        <li><Link to="/subscribe" className="text-black">Subscribe </Link></li>
        <li><Link to="/about" className="text-black">About</Link></li>
        <li><Link to="/login" className="text-black">Login</Link></li>
        <li><Link to="/SignUp" className="text-black">SignUp</Link></li>
      </ul>
      <div className="fixed right-5 w-790vw py-4 text-white bg-gray shadow-0 mobile-dropdown top-19 lg:hidden ">
 <button
          className="menu-toggle"
          onClick={handleMenuToggle}
          
          aria-label="Toggle Menu"
        >
          {menuOpen ? ( 
            <>
            
              <div className="w-6 h-1 my-1 transition-transform rotate-45 translate-y-1 bg-black"></div>
              <div className="w-6 h-1 my-1 transition-transform -rotate-45 -translate-y-1 bg-black"></div>
            </>
          ) : (
            <>
              <div className="w-6 h-1 my-1 transition-transform bg-black"></div>
              <div className="w-6 h-1 my-1 bg-black opacity-100"></div>
              <div className="w-6 h-1 my-1 transition-transform bg-black"></div>
            </>
          )}
        </button>
      
        {renderDropdown()}
      </div>

    </nav>
  );
};

export default Navbar;
