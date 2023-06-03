import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="dark:bg-gray transition-colors duration-300">
      <header className="sticky inset-0 z-50">
        <Navbar />
      </header>
      <main className="mt-10  ">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
