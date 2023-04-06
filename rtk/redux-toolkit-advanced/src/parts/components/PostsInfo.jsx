import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPostById } from '../../redux/slice/postsSlice';
import ReactionBtn from '../feautes/ReactionBtn';
import TimeAgo from '../feautes/TimeAgo';
import PostAuthor from './PostAuthor';

const PostsInfo = memo(({ postId }) => {
  // memo means only post when change render

  const postByID = useSelector(state => selectPostById(state, postId));

  return (
    <article key={postByID.id}>
      <h2>{postByID.title}</h2>
      <p className="body">{postByID.body.substring(0, 75)}</p>
      <section className="postCredit">
        <Link to={'post/' + postByID.id}>View Post</Link>
        <PostAuthor userId={postByID.userId} />
        <TimeAgo timestamp={postByID.date} />
      </section>
      <ReactionBtn post={postByID} />
    </article>
  );
});

export default PostsInfo;
