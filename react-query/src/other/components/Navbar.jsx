import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-300 p-4 flex flex-wrap items-center justify-start gap-4 ">
      <NavLink className="bg-blue-300 p-2 rounded-xl" to="/">
        Home
      </NavLink>
      <NavLink to="rq_cities" className="bg-blue-300 p-2 rounded-xl">
        RQ Cities
      </NavLink>
      <NavLink to="rq_paralel" className="bg-blue-300 p-2 rounded-xl">
        Paralel Queries
      </NavLink>
      <NavLink to="dy_rq_paralel" className="bg-blue-300 p-2 rounded-xl">
        Dynamic Paralel Queries
      </NavLink>
      <NavLink to="dependent_rq" className="bg-blue-300 p-2 rounded-xl">
        Dependent Queries
      </NavLink>
      <NavLink to="paginated_rq" className="bg-blue-300 p-2 rounded-xl">
        Paginated Queries
      </NavLink>
      <NavLink to="infinite_rq" className="bg-blue-300 p-2 rounded-xl">
        Load More(Infinite) Queries
      </NavLink>
      <NavLink to="test" className="bg-blue-300 p-2 rounded-xl">
        Test Queries
      </NavLink>
      <NavLink
        to="list_cities"
        className="bg-pink-600 opacity-50 p-2 rounded-xl"
      >
        LIST OF Cities
      </NavLink>
      <NavLink to="cities" className="bg-pink-600 opacity-50 p-2 rounded-xl">
        UseEffect Cities
      </NavLink>
    </nav>
  );
};

export default Navbar;
