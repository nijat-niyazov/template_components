import { useDispatch } from 'react-redux';
import { reactionToPost } from '../../redux/slice/postsSlice';
reactionToPost;

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionBtn = ({ post }) => {
  const dispatch = useDispatch();

  // console.log(post);

  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        // key and value ⤴
        return (
          <button
            style={{ cursor: 'pointer' }}
            key={name}
            type="button"
            className="reactionButton"
            onClick={() =>
              dispatch(reactionToPost({ idPost: post.id, reaction: name }))
            }
          >
            {emoji} {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
};

export default ReactionBtn;
