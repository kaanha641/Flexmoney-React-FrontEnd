// pages/SignIn/SignIn.js
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Button from '../../components/Button/Button';
import axios from 'axios'; // Import Axios
import '../auth.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      // Make HTTP request using Axios
      const response = await axios.post('https://flexmoney-django-backend.onrender.com/api/user/login', {
        email,
        password,
      });

      console.log('Sign-in successful:', response.data.access_token);

      // Save the JWT token to local storage
      localStorage.setItem('token', response.data.access_token);

      // Redirect the user to the home page
      navigate('/'); // Use navigate instead of history.push

      // You can perform any other actions here after successful sign-in
    } catch (error) {
      console.error('Sign-in failed:', error.response.data);
      setError('Sign-in failed. Please check your email and password.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form>
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

        <Button type="button" onClick={handleSignIn}>
          Sign In
        </Button>

        {error && <p className="error-message">{error}</p>}

        <p>
          Don't have an account?{' '}
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
