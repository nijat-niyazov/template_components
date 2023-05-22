import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = () => {
  return (
    <>
      <header className="sticky inset-0 ">
        <Navbar />
      </header>
      <main className="mt-10">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
