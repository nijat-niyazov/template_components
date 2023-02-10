import chakraTheme from '@chakra-ui/theme';
import { useCallback, useMemo, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './Header';
import UIStories from './UIStories';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/:type" element={<UIStories />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <Link to="/top">Top Stories</Link>
        <Link to="/new">Latest Stories</Link>
        <Link to="/best">Best Stories</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
