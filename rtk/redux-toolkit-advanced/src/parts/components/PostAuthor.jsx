import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/slice/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  // console.log('it is rendered');

  const author = users.find(user => user.id === userId);

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};
export default PostAuthor;
