import { Outlet } from 'react-router-dom';
import Header from '../parts/components/Header';

const Layout = () => {
  return (
    <div>
      <header className='header'> 
        <Header />
      </header>
      <main className="App">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
