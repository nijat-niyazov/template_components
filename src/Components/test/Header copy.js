import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <Link to="/top" activeClassName="active">
          Top Stories
        </Link>
        <Link to="/new" activeClassName="active">
          Latest Stories
        </Link>
        <Link to="/best" activeClassName="active">
          Best Stories
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;