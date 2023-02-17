import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const CareerNotFound = () => {
  const errorObj = useRouteError();

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{errorObj.message}</p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
};

export default CareerNotFound;
