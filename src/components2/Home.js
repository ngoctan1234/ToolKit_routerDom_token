// src/components/UserProfile.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux2/authSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!user) return <p>Please log in: <Link to="/login">Login</Link></p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {user}</p>
      <p><strong>Token:</strong> {token}</p>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/both"> Both</Link>
    </div>
  );
};

export default Home;