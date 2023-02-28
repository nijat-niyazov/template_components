// import './main.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {
  Home,
  About,
  Faq,
  Contact,
  NotFound,
  CareersLayout,
  Careers,
  CareerDetails,
  CareerNotFound,
  contactAction,
  careersLoader,
  careerDetailLoader,
} from './Pages/exporter';
import { RootLayout, HelpLayout } from './Layout/exporter';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      {/* home page is index */}
      <Route
        path="about"
        element={<About />}
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
