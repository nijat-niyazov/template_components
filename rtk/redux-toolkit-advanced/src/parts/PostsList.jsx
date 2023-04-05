import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchingPosts,
  selecPostsStatus,
  selectAllPosts,
  selectErrorState,
} from '../redux/slice/postsSlice';
import PostsInfo from './components/PostsInfo';

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const status = useSelector(selecPostsStatus);
  const error = useSelector(selectErrorState);

  useEffect(() => {
    status === 'idle' ? dispatch(fetchingPosts()) : null;
  }, [status, dispatch]);

  const orderedPosts = posts
    .slice()
    // shallow copy because we don't want mutate original one

    .sort((a, b) => b.date.localeCompare(a.date));
  //   comes b and it compares to a. wich means b will come first

  return (
    <section>
      <h2>Posts</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'fulfilled' &&
        orderedPosts.map(post => {
          return <PostsInfo key={post.id} post={post} />;
        })}
      {status === 'failed' && <p>{error}</p>}
    </section>
  );
};
export default PostsList;
