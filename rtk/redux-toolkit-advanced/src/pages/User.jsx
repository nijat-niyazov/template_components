import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectPostsOfAuthor } from '../redux/slice/postsSlice';
import { selectUserById } from '../redux/slice/usersSlice';

const User = () => {
  const { userId } = useParams();

  const user = useSelector(state => selectUserById(state, Number(userId)));

  // // 1# which is w get all posts then filter it and it affect perforamnce because we get all posts and then filter it
  // const posts = useSelector(selectAllPosts(state));
  // // it is same with allPosts useSelector(selectAllPosts)
  // const postsOfAuthor = posts.filter(post => (post.userId = Number(userId)));

  // // #2 here in selector we already filter results we has to get but it's not memoized
  // const postsOfAuthor = useSelector(state => {
  //   const allPosts = selectAllPosts(state);
  //   // it is same with allPosts useSelector(selectAllPosts)
  //   return allPosts.filter(post => post.userId === Number(userId));
  // });

  // #3 memoized value which has dependencies
  const postsOfAuthor = useSelector(state =>
    selectPostsOfAuthor(state, Number(userId))
  );

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>
        {postsOfAuthor.map(post => (
          <li key={post.id}>
            <Link to={'/post/' + post.id}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default User;
