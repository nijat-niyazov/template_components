import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

import Home from './Pages/Home';
import About, { testLoader } from './Pages/About';
import './index.css';
import RootLayout from './Layout/RootLayout';
import HelpLayout from './Layout/HelpLayout';
import Faq from './Pages/help/Faq';
import Contact, { contactAction } from './Pages/help/Contact';
import NotFound from './Pages/NotFound';
import CareersLayout from './Pages/сareers/CareersLayout';
import Careers, { careersLoader } from './Pages/сareers/Careers';
import CareerDetails, {
  careerDetailLoader,
} from './Pages/сareers/CareerDetails';
import CareerNotFound from './Pages/сareers/CareerNotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      {/* home page is index */}
      <Route path="about" element={<About />} 
      // loader={testLoader}
       />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerNotFound />}
      >
        <Route index loader={careersLoader} element={<Careers />} />
        <Route
          path=":careerNum"
          loader={careerDetailLoader}
          element={<CareerDetails />}
        />
      </Route>
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
