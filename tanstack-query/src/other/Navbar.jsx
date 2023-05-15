import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-300 p-4 flex items-center justify-start gap-4 ">
      <NavLink className="bg-blue-300 p-2 rounded-xl" to="/">
        Home
      </NavLink>
      <NavLink to="heroes" className="bg-blue-300 p-2 rounded-xl">
        useEf Heroes
      </NavLink>
      <NavLink to="rq_heroes" className="bg-blue-300 p-2 rounded-xl">
        RQ HEROES
      </NavLink>
    </nav>
  );
};

export default Navbar;
