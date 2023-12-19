// components/Header/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  // Check if token is present in local storage
  const isTokenPresent = localStorage.getItem('token');
  const navigate = useNavigate(); // Use useNavigate

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect the user to the home page
    navigate('/');
  };

  return (
    <header className="header">
      <h1>Yoga Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isTokenPresent ? (
            <li>
              <Link onClick={handleLogout}>Log Out</Link>
            </li>
          ) : (
            <li>
              <Link to="/signin">Log In</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
