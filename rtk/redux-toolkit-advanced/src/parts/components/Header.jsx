import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseCount, selectCount } from '../../redux/slice/postsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <>
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            dispatch(increaseCount());
          }}
        >
          {count}
        </button>
      </nav>
    </>
  );
};

export default Header;
