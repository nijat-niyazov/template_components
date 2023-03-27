const DropItem = ({ icons, children, goTo, setactiveMenu }) => {
  return (
    <a
      href="#"
      className="menu-item"
      onClick={() => goTo && setactiveMenu(goTo)}
    >
      <span className="icon-left">{icons?.left}</span>

      {children}

      <span className="icon-right">{icons?.right}</span>
    </a>
  );
};

export default DropItem;
