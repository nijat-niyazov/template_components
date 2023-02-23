import React, { useEffect } from 'react';
import { NavLink, Outlet, useLoaderData, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

const Navbar = () => {
  const navElements = useLoaderData();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(mob => false);
  }, [useLocation()]);

  return (
    <div>
      <header>
        <nav className="navbar">
          <h3 className="logo">Logo</h3>

          <ul className={mobile ? 'nav-links-mobile' : 'nav-links'}>
            {navElements.map((element, i) => {
              console.log(element);
              return (
                <NavLink to={element.url} key={i}>
                  <li>{element.name}</li>
                </NavLink>
              );
            })}
          </ul>
          <button
            className="mobile menu-icon"
            onClick={() => setMobile(prev => !prev)}
          >
            {mobile ? <ImCross /> : <FaBars />}
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;

export const rootLoader = async () => {
  const { data } = await axios.get('../../data/db.json');
  return data;
};
