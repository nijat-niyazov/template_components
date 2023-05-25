import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SearchParams from './SearchParams';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SearchParams />}></Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
