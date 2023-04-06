import { useSelector } from 'react-redux';
import {
  selecPostsStatus,
  selectErrorState,
  selectPostsIds,
} from '../redux/slice/postsSlice';
import PostsInfo from './components/PostsInfo';

const PostsList = () => {
  // const posts = useSelector(selectAllPosts);
  const allPostsIds = useSelector(selectPostsIds);
  const status = useSelector(selecPostsStatus);
  const error = useSelector(selectErrorState);

  // const orderedPosts = posts
  //   .slice()
  //   // shallow copy because we don't want mutate original one

  //   .sort((a, b) => b.date.localeCompare(a.date));
  // //   comes b and it compares to a. wich means b will come first

  // we sorted it already in redux

  return (
    <section>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'fulfilled' &&
        allPostsIds.map(postId => (
          <PostsInfo key={postId} postId={postId} />
        ))}
      {status === 'failed' && <p>{error}</p>}
    </section>
  );
};
export default PostsList;
