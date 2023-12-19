// pages/SignUp/SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import axios from 'axios';
import '../auth.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {

    e.preventDefault();
    // Validate age before proceeding
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18 || age > 65) {
      setError('You must be between 18 and 65 years old to sign up.');
      return;
    }

    try {
      // Make HTTP request using Axios
      let confirm_password = password;
      const response = await axios.post('https://flexmoney-django-backend.onrender.com/api/user/register', {
        name,
        email,
        password,
        dob,
        confirm_password,
        mobile,
      });

      console.log('Sign-up successful:', response.access_token);

      // Save the JWT token to local storage
      localStorage.setItem('token', response.data.access_token);

      // You can redirect the user to another page or perform any other actions here
    } catch (error) {
      console.error('Sign-up failed:', error.response.data);
      setError('Sign-up failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <label htmlFor="mobile">Mobile</label>
        <input
          type="tel" // Use "tel" for mobile number input
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <Button type="button" onClick={handleSignUp}>
          Sign Up
        </Button>

        {error && <p className="error-message">{error}</p>}

        <p>
          Already have an account?{' '}
          <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
