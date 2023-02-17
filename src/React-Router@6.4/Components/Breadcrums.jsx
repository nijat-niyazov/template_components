import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  // console.log(location);

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      console.log(crumb);
      currentLink = currentLink + `/${crumb}`;
      console.log(currentLink);

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>
            {crumb.at(0).toUpperCase() + crumb.slice(1)}
          </Link>
        </div>
      );
    });

  console.log(crumbs);

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
