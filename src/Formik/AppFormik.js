import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Rooter from './Rooter';
import Contact from './prototurk/pages/contact/Contact';
import Home from './prototurk/pages/home/Home';
import FormikLogin from './prototurk/pages/profile/FormikLogin';
import SignupForm from './tutorials/SignupForm';

const AppFormik = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rooter />}>
        <Route index element={<Home />} />
        <Route path="login" element={<FormikLogin />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tutorial" element={<SignupForm />} />
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
