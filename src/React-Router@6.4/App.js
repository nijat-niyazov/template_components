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
import About from './Pages/About';
import './index.css';
import RootLayout from './Layout/RootLayout';
import HelpLayout from './Layout/HelpLayout';
import Faq from './Pages/help/Faq';
import Contact from './Pages/help/Contact';
import NotFound from './Pages/NotFound';
import CareersLayout from './Pages/сareers/CareersLayout';
import Careers, { careersLoader } from './Pages/сareers/Careers';
import CareerDetails, {
  careerDetailLoader,
} from './Pages/сareers/CareerDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      {/* home page is index */}
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
