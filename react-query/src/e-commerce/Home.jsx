import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HeightTransition from './HeightTransition';
import Layout from './layouts/Layout';
import AddProduct from './Pages/AddProduct';
import Categorized from './Pages/Categorized';
import Compared from './Pages/Compared';
import CompareSelector from './Pages/CompareSelector';
import Dependent from './Pages/Dependent';
import Infinited from './Pages/Infinited';
import Paginated from './Pages/Paginated';
import ProductDetails from './Pages/ProductDetails';
import ProductsList from './Pages/ProductsList';
import Yes from './Pages/Yes';

const Home = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="products">
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="category">
          <Route path=":category" element={<Categorized />} />
        </Route>
        <Route path="paginated" element={<Paginated />} />
        <Route path="test" element={<HeightTransition />} />
        <Route path="compareselector" element={<CompareSelector />} />
        <Route path="compared" element={<Compared ids={[1, 3]} />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="dependend" element={<Dependent />} />
        <Route path="infinitive" element={<Infinited />} />
        <Route path="yes" element={<Yes />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Home;
