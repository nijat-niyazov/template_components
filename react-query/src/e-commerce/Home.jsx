import { useState } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HeightTransition from './HeightTransition';
import AddProduct from './components/AddProduct';
import Compared from './components/Compared';
import Layout from './layouts/Layout';
import AdminPanel from './pages/AdminPanel';
import Categorized from './pages/Categorized';
import CompareSelector from './pages/CompareSelector';
import Infinited from './pages/Infinited';
import Paginated from './pages/Paginated';
import ProductDetails from './pages/ProductDetails';
import ProductsList from './pages/ProductsList';
import InfinitedEffect from './pages/InfinitedEffect';

const Home = () => {
  const [logged, setLogged] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="products">
          <Route index element={<ProductsList admin={logged} />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="category">
          <Route path=":category" element={<Categorized />} />
        </Route>
        <Route path="paginated" element={<Paginated />} />
        <Route path="test" element={<HeightTransition />} />
        <Route path="compareselector" element={<CompareSelector />} />
        <Route path="compared" element={<Compared />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="infinitive" element={<Infinited />} />
        <Route path="infinitiveffect" element={<InfinitedEffect />} />
        <Route
          path="admin"
          element={<AdminPanel user={{ logged, setLogged }} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Home;
