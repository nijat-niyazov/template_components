import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Heroes from './other/Heroes';
import Home from './other/Home';
import Layout from './other/Layout';
import ReQuHeroes from './other/ReQuHeroes';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<Heroes />} />
        <Route path="rq_heroes" element={<ReQuHeroes />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
