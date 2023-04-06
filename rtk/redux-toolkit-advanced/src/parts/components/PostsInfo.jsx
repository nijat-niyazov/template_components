import { Link } from 'react-router-dom';
import ReactionBtn from '../feautes/ReactionBtn';
import TimeAgo from '../feautes/TimeAgo';
import PostAuthor from './PostAuthor';

const PostsInfo = ({ post }) => {
  return (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p className="body">{post.body.substring(0, 75)}</p>
      <section className="postCredit">
        <Link to={'post/' + post.id}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </section>
      <ReactionBtn post={post} />
    </article>
  );
};

export default PostsInfo;
