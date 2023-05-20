import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layouts/Layout';
import AddProduct from './Pages/AddProduct';
import Categorized from './Pages/Categorized';
import Compared from './Pages/Compared';
import Dependent from './Pages/Dependent';
import Paginated from './Pages/Paginated';
import Product from './Pages/Product';
import ProductsList from './ProductsList';

const Home = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="products">
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="category">
          <Route path=":category" element={<Categorized />} />
        </Route>
        <Route path="paginated" element={<Paginated />} />
        <Route path="compared" element={<Compared />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="dependend" element={<Dependent />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Home;
