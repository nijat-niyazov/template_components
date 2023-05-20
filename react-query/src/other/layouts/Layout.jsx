import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
