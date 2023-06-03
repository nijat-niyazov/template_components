import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './layouts/Layout';
import Infinitive from './pages/Infinited';
import ProductsList from './pages/ProductsList';
import Paginated from './pages/paginated/Paginated';

const Home = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsList />} />
        <Route path="/infinitive" element={<Infinitive />} />
        <Route path="/paginated" element={<Paginated />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Home;
