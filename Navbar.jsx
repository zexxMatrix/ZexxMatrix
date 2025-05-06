import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <nav className="bg-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-accent"
              >
                ZexxMatrix
              </motion.div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-light hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/predictors" className="text-light hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Predictors</Link>
                <Link to="/about" className="text-light hover:text-accent px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-light hover:text-accent px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {currentUser ? (
                <div className="flex items-center">
                  <Link to="/profile" className="text-light hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="ml-4 bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <Link to="/login" className="text-light hover:text-accent px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </Link>
                  <Link to="/register" className="ml-4 bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark/90 backdrop-blur-md">
            <Link to="/" className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/predictors" className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Predictors</Link>
            <Link to="/about" className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            {currentUser ? (
              <>
                <Link to="/profile" className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/register" className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;