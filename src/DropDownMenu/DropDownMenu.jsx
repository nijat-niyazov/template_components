import { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';
import DropItem from './DropItem';

const DropDownMenu = () => {
  const [activeMenu, setactiveMenu] = useState('main');
  const [menuHeight, setmenuHeight] = useState(null);
  const menu = useRef();

  useEffect(() => {
    setmenuHeight(menu.current?.firstChild.offsetHeight);
    console.log(menu.current?.firstChild.offsetHeight);
  }, []);

  const heightSetter = element => {
    console.log(element.offsetHeight);
  
    
    setmenuHeight(element.offsetHeight);
  };

  // style={{ height: menuHeight + 'px' }}

  return (
    <div className="dropdown"  ref={menu}>
      <CSSTransition
        in={activeMenu === 'main'} // in, if condition === true, then children will be seen
        unmountOnExit // unmountonexit, rmeoves all children when they are not active
        timeout={500} // timeout, duration of animation
        classNames="first-menu"
        onEntering={heightSetter}
      >
        <div className="menu">
          <DropItem>My Profile</DropItem>
          <DropItem
            icons={{
              left: <FiSettings />,
              right: <AiOutlineArrowRight />,
            }}
            goTo="settings"
            setactiveMenu={setactiveMenu}
          >
            Settings
          </DropItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropItem
            icons={{
              left: <AiOutlineArrowLeft />,
              right: <AiOutlineArrowRight />,
            }}
            goTo="main"
            setactiveMenu={setactiveMenu}
          />
          <DropItem>Settings</DropItem>
          <DropItem>Settings</DropItem>
          <DropItem>Settings</DropItem>
          <DropItem>Settings</DropItem>
          <DropItem>Settings</DropItem>
          <DropItem>Settings</DropItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownMenu;
