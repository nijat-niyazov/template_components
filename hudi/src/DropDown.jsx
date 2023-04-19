import MenuItem from './MenuItem';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  // console.log(
  //   'dropdown - ',
  //   submenus.map(s => s.title),
  //   depthLevel
  // );

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  console.log('okay thanks for sharing this video')
  console.log('all rithg gys i got it bro rightb now');
  console.log('may be next time bruh');

  return (
    // <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <MenuItem item={submenu} key={index} depthLevel={depthLevel} source='dropdown' />
      ))}
    </ul>
  );
};

export default Dropdown;
