import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';

const Customer = () => {
  const { users, isLoading, error } = useSelector(store => store.customers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {isLoading && <div>Loading...</div>}
      {error.exist && <div>Error: {error.message}</div>}
      {!isLoading && users?.length !== 0 && (
        <ul>
          {users?.map(user => (
            <li key={user.id}>{user.name} + </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Customer;
