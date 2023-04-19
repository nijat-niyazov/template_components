import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
  // useTitleSetter('Help');

  return (
    <div className="help-layout">
      <Helmet>
        <title>Help</title>
        <meta name="description" content="help description" />
      </Helmet>
      <h2>Website Help</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
