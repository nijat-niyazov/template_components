import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Rooter from './Rooter';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

const AppFormik = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rooter />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Profile />} />
      </Route>
    )
  );

  return (
    <div className="AppFormik">
      <RouterProvider router={router} />
    </div>
  );
};

export default AppFormik;
