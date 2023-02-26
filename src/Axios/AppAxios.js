import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home, { loaderStart } from './pages/Home';
import Rooter from './Rooter';

const AppAxios = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rooter />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return (
    <div className="AppAxios">
      <RouterProvider router={router} />
    </div>
  );
};

export default AppAxios;
