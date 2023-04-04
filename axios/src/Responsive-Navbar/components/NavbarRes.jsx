// import './nav.scss';
import React, { useState } from 'react';
import Toggle from './Toggle';

const NavbarRes = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header>
      <nav>
        <div className="toggle-icon" onClick={() => setOpened(!opened)}>
          <span className={opened ? 'bar opened' : 'bar '}></span>
          <span className={opened ? 'bar opened' : 'bar '}></span>
          <span className={opened ? 'bar opened' : 'bar '}></span>
        </div>

        <Toggle />

        <ul className={opened ? 'nav-components show' : 'nav-components '}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/shop">Costumer service</a>
          </li>
        </ul>
      </nav>

      <h1>Site Title</h1>
    </header>
  );
};

export default NavbarRes;
