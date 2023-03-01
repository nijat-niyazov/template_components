import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Forwardref from './Forwardref';

function AppFunctions() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Forwardref />} />
      </Route>
    )
  );

  return (
    <div className="AppFunctions">
      <RouterProvider router={router} />
    </div>
  );
}

export default AppFunctions;

const Root = () => {
  return (
    <>
      {/* <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <Link to="/top">Top Stories</Link>
        <Link to="/new">Latest Stories</Link>
        <Link to="/best">Best Stories</Link>
        <Link to="/copies">Copies</Link>
      </div>
      <div> */}
      <Outlet />
      {/* </div> */}
    </>
  );
};
