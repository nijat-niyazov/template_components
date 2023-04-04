import { motion } from 'framer-motion';
import MenuItem from '../components/MenuItem';
import { MenuList } from '../helpers/MenuList';
import '../styles/Menu.css';

function Menu() {
  return (
    <motion.div
      className="menu"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Menu;
