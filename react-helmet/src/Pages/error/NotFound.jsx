import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2> Page NotFound!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <span>
        Go to the <Link to="/">Homepage</Link>...
      </span>
    </div>
  );
};

export default NotFound;
