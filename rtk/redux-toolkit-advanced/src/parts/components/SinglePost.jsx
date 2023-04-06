import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectPostById } from '../../redux/slice/postsSlice';
import ReactionBtn from '../feautes/ReactionBtn';
import TimeAgo from '../feautes/TimeAgo';
import PostAuthor from './PostAuthor';

const SinglePost = () => {
  const { postId } = useParams();

  console.log(postId);

  
  const post = useSelector(state => selectPostById(state, Number(postId)));
  // we send arguments to slice function
  console.log(post);

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={'/post/edit/' + post.id}>Edit post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionBtn post={post} />
    </article>
  );
};

export default SinglePost;
