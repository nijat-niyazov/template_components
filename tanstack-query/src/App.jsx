import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Evolution from './other/Evolution';
import Layout from './other/Layout';
import Home from './other/Home';
import Heroes from './other/Heroes';
import ReQuHeroes from './other/ReQuHeroes';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='sh' element={<Heroes/>}/>
        <Route path='rq_sh' element={<ReQuHeroes/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />;
}

export default App;
