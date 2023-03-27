import React from 'react';
import { AiFillCaretDown, AiOutlinePlus } from 'react-icons/ai';
import { BsBellFill, BsMessenger } from 'react-icons/bs';
import DropDownMenu from './DropDownMenu';
import NavItem from './style/NavItem';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<AiOutlinePlus />} />
        <NavItem icon={<BsBellFill />} />
        <NavItem icon={<BsMessenger />} />
        <NavItem icon={<AiFillCaretDown />}>
          <DropDownMenu />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
