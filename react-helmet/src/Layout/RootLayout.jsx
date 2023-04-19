import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="header">
        <nav>
          <h1>React Router</h1>
          <NavLink to="/">Home ➡</NavLink>
          <NavLink to="about">About ➡ </NavLink>
          <NavLink to="help">Help ➡ </NavLink>
          <NavLink to="careers">Careers ➡ </NavLink>
          {/* navLink add class when it's clicked it gets active class */}
        </nav>
      </header>

      <main>
        <Outlet />
        {/* it is content where all pages is seen */}
      </main>
    </div>
  );
};

export default RootLayout;
