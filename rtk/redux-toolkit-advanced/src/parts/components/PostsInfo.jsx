import ReactionBtn from '../feautes/ReactionBtn';
import TimeAgo from '../feautes/TimeAgo';
import PostAuthor from './PostAuthor';

const PostsInfo = ({ post }) => {
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <section className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionBtn post={post} />
      </section>
    </article>
  );
};

export default PostsInfo;
