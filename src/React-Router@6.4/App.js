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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* home page is index */}
      <Route path="/about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
