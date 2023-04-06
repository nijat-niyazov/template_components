import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './layouts/Layout';
import PostLayout from './layouts/PostLayout';
import Home from './pages/Home';
import SinglePost from './parts/components/SinglePost';
import AddPostForm from './parts/feautes/AddPostForm';
import PostActions from './parts/feautes/PostActions';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/post" element={<PostLayout />}>
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<PostActions />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<PostsList />} />
  //         <Route path="post">
  //           <Route index element={<AddPostForm />} />
  //           <Route path=":postId" element={<SinglePost />} />
  //           <Route path="edit/:postId" element={<EditPostForm />} />
  //         </Route>
  //       </Route>
  //     </Routes>
  //   </Router>
  // );
}

export default App;
