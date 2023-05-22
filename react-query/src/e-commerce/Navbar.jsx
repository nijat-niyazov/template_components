import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setshow] = useState(false);

  const handleShowNav = () => {
    setshow(p => !p);
  };

  return (
    <nav className="bg-blue-900 p-2 text-gray-200 w-full flex md:items-center justify-between">
      <Link onClick={() => setshow(false)} className="block" to="/products">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/298/276/small/gear-smart-eps-icon-digital-tech-business-logo-free-vector.jpg"
          alt=""
          className="w-10 h-10 rounded-3xl"
        />
      </Link>

      <div
        className={`grid ${
          show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        } absolute md:static top-full left-0  md:inline w-full md:w-auto transition-all duration-300`}
      >
        <ul className="bg-blue-300 overflow-hidden md:bg-transparent flex md:items-start flex-col md:flex-row  md:mr-5 gap-2 ">
          <li
            onClick={handleShowNav}
            className="p-2 m-2 mb-0  font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md"
          >
            <Link className="block" to="/products">
              List
            </Link>
          </li>
          <li
            onClick={handleShowNav}
            className="p-2 m-2 mb-0  font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md"
          >
            <Link className="block" to="/infinitive">
              Infititive Scrolled
            </Link>
          </li>
          <li
            onClick={handleShowNav}
            className="p-2  m-2 mb-0  font-bold bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md"
          >
            <Link className="block" to="/paginated">
              Paginated
            </Link>
          </li>
          <li
            onClick={handleShowNav}
            className="p-2  m-2 mb-0  font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md"
          >
            <Link className="block" to="/dependend">
              Dependend Products
            </Link>
          </li>
          <li
            onClick={handleShowNav}
            className="p-2  m-2 mb-0  font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md"
          >
            <Link className="block" to="/compareselector">
              Compare Products
            </Link>
          </li>
          <li
            onClick={handleShowNav}
            className="p-2 m-2 font-bold  bg-amber-400 text-black hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300 rounded-md"
          >
            <Link className="block" to="/admin">
              Admin-Panel
            </Link>
          </li>
        </ul>
      </div>

      <button
        onClick={handleShowNav}
        className={`
        flex items-center p-2 justify-center md:hidden rounded-lg flex-col space-y-2 transition-all duration-300`}
        // ${
        //   show && ' rotate-90 bg-blue-400 '
        // }
      >
        <span
          className={`${
            show && 'rotate-45 translate-y-[300%] '
          } bg-gray-300 h-1 w-8 transition-all duration-300`}
        ></span>
        <span
          className={`${
            show ? 'opacity-0 ' : 'opacity-100'
          } bg-gray-300 h-1 w-8 transition-all duration-300`}
        ></span>
        <span
          className={`${
            show && '-rotate-45 -translate-y-[300%]  '
          } bg-gray-300 h-1 w-8 transition-all duration-300`}
        ></span>
      </button>
    </nav>
  );
};

export default Navbar;
