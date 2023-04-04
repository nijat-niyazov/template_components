import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Rooter = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '40px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/skills">Skills</Link>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Rooter;
