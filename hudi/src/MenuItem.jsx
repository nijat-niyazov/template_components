import { useState } from 'react';
import Dropdown from './DropDown';

const MenuItem = ({ item, depthLevel, source }) => {
  const [dropdown, setDropdown] = useState(false);

  console.log(`${source}:`, item, 'dept - ', depthLevel);

  return (
    <li className="menu-item">


console.log('all right i gotyou bruh ');

      {item.submenu ? (
        <>
          <button type="button" onClick={() => setDropdown(prev => !prev)}>
            {item.title}
            {depthLevel > 0 ? (
              <span className="depth">&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={item.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href="/#">{item.title}</a>
      )}
    </li>
  );
};

export default MenuItem;

// let ref = useRef();

// useEffect(() => {
//   const handler = (event) => {
//     if (dropdown && ref.current && !ref.current.contains(event.target)) {
//       setDropdown(false);
//     }
//   };
//   document.addEventListener("mousedown", handler);
//   document.addEventListener("touchstart", handler);
//   return () => {
//     // Cleanup the event listener
//     document.removeEventListener("mousedown", handler);
//     document.removeEventListener("touchstart", handler);
//   };
// }, [dropdown]);

// const onMouseEnter = () => {
//   window.innerWidth > 960 && setDropdown(true);
// };

// const onMouseLeave = () => {
//   window.innerWidth > 960 && setDropdown(false);
// };
// ref={ref}
// onMouseEnter={onMouseEnter}
// onMouseLeave={onMouseLeave}
