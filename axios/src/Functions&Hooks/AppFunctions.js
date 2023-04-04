import {
  createBrowserRouter,
  createRoutesFromElements,
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
      <Outlet />
    </>
  );
};
