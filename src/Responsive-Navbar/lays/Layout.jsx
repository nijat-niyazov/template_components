import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarRes from '../components/NavbarRes';

const Layout = () => {
  return (
    <>
      <NavbarRes />
      <Outlet />
    </>
  );
};

export default Layout;
