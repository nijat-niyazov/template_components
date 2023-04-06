import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewPost } from '../../redux/slice/postsSlice';
import { selectAllUsers } from '../../redux/slice/usersSlice';

const AddPostForm = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const validation =
    [title, content, userId].every(Boolean) &&
    // all of them is true or has value
    addRequestStatus === 'idle';

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onUserChange = e => setUserId(Number(e.target.value));

  // console.log(userId);

  const onSavePostClicked = () => {
    // if (title && content) {
    //   dispatch(addPost(title, content, userId));
    //   setTitle('');
    //   setContent('');
    // }
    if (validation) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        // unwrap function

        setTitle('');
        setContent('');
        setUserId('');
        navigate('/');
      } catch (e) {
        console.error('Failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">User (author):</label>

        <select id="postAuthor" value={userId} onChange={onUserChange}>
          <option value=""></option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <label htmlFor="postContent">Content:</label>

        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <button
          type="submit"
          onClick={onSavePostClicked}
          disabled={!validation}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
