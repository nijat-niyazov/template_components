import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  console.log(location.pathname.split('/'));

  const crumbs = location.pathname
    .split('/')  // ["", contact, ""]
    .filter(crumb => crumb !== '') // [help, faq]
    .map(crumb => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>
            {crumb.at(0).toUpperCase() + crumb.slice(1)}
          </Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
