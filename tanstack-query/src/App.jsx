import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import DependendQueries from './other/DependendQueries';
import DynRQParalel from './other/DynRQParalel';
import InfiniteRQ from './other/InfiniteRQ';
import PaginatedRQ from './other/PaginatedRQ';
import ParallelQueries from './other/ParallelQueries';
import RqCity from './other/RQCity';
import RqListCities from './other/RqListCities';
import Layout from './other/layouts/Layout';
import Home from './other/pages/Home';
// import Home from './other/Home';
// import Layout from './other/Layout';
// import List from './other/List';
// import ParallelQueries from './other/ParallelQueries';
// import RqCity from './other/RQCity';
// import RqListCities from './other/ReListCities';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* <Route path="citites" element={<UseEffectCities />} /> */}
        {/* <Route path="list_cities" element={<List />} /> */}
        <Route index element={<Home />} />
        <Route path="rq_cities">
          <Route index element={<RqListCities />} />
          <Route path=":id" element={<RqCity />} />
        </Route>
        <Route path="rq_paralel" element={<ParallelQueries />} />
        <Route
          path="dy_rq_paralel"
          element={<DynRQParalel cityIdies={[1, 3]} />}
        />
        <Route
          path="dependent_rq"
          element={<DependendQueries email={'nidzhat.niyazov@gmail.com'} />}
        />
        <Route path="paginated_rq" element={<PaginatedRQ />} />
        <Route path="infinite_rq" element={<InfiniteRQ />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
