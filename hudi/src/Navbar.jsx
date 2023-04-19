import MenuItem from './MenuItem';
import { menuItems } from './menuItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-els">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItem
              item={menu}
              key={index}
              depthLevel={depthLevel}
              source="navbar"
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
