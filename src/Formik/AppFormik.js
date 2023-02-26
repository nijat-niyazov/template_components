import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Contact from './comps/Contact';
import FormikLogin from './comps/FormikLogin';
import Login from './comps/useFormikLogin';
import Home, { loaderStart } from './pages/Home';
import Rooter from './Rooter';

const AppFormik = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rooter />}>
        <Route index element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="login" element={<FormikLogin />} />
        <Route path="contact" element={<Contact />} />
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
