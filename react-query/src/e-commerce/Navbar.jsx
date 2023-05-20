import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setshow] = useState(false);

  const handleShowNav = () => {
    setshow(p => !p);
  };

  return (
    <nav className="bg-blue-900 p-2 text-gray-200 w-full fixed flex md:items-center justify-between">
      <Link to="/products">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/298/276/small/gear-smart-eps-icon-digital-tech-business-logo-free-vector.jpg"
          alt=""
          className="w-10 h-10"
        />
      </Link>

      <div
        className={`grid ${
          show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        } absolute md:static top-full left-0  md:inline w-full md:w-auto transition-all duration-500`}
      >
        <ul className="bg-blue-300 overflow-hidden md:bg-transparent flex flex-col md:flex-row  md:mr-5 gap-2 ">
          <Link to="/">
            <li className="p-2 my-2 mx-2  font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md">
              List
            </li>
          </Link>
          <Link to="/paginated">
            <li className="p-2  mx-2  font-bold bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md">
              Paginated
            </li>
          </Link>
          <Link to="/addproduct"></Link>
          <Link to="/dependend">
            <li className="p-2  mx-2  font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md">
              Dependend Products
            </li>
          </Link>
          <Link to="/compared">
            <li className="p-2  mx-2  font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md">
              Compare Products
            </li>
          </Link>
          <Link to="/admin">
            <li className="p-2 my-2 mx-2 font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md">
              Admin-Panel
            </li>
          </Link>
        </ul>
      </div>

      <button
        onClick={handleShowNav}
        className={`${
          show && ' rotate-90 bg-blue-400 '
        } flex items-center p-2 justify-center md:hidden rounded-lg flex-col space-y-2 transition-all duration-500`}
      >
        <span className="bg-gray-300 h-1 w-8"></span>
        <span className="bg-gray-300 h-1 w-8"></span>
        <span className="bg-gray-300 h-1 w-8"></span>
      </button>
    </nav>
  );
};

export default Navbar;
