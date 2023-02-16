import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import UIStories from './Components/GetStoriesAxios/UIStories';
import Indian from './Components/indian/Indian';
import ShowStories from './Components/test/Show';
import CopiesArrays_Objects from './Functions/CopiesArrays&Objects';
import NummberIncreaser from './Functions/NumberIncreaser';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Indian />} />
        <Route path="/:type" element={<ShowStories />} />
        {/* <Route path="/:type" element={<UIStories />} /> */}
        <Route path="/copies" element={<CopiesArrays_Objects />} />
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
        <Link to="/copies">Copies</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
