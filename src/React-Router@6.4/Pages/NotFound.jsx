import React from 'react';
import { Link } from 'react-router-dom';
import useTitleSetter from '../utils/titleSetter';

const NotFound = () => {
  // useTitleSetter('Non existed');

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
