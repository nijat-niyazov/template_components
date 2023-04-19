import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelpLayout, RootLayout } from './Layout/exporter';
import {
  About,
  careerDetailLoader,
  CareerDetails,
  CareerNotFound,
  Careers,
  CareersLayout,
  careersLoader,
  Contact,
  contactAction,
  Faq,
  Home,
  NotFound,
} from './Pages/exporter';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="about" element={<About />} />

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
