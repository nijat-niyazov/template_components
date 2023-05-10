import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { error, fetchItems, isLoading } from '../slices/todoSlice';
import AddItem from './AddItem';
import List from './List';
import Modal from './Modal';

const TodoCrudRedux = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const err = useSelector(error);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div
      className={`${
        loading && 'opacity-30'
      } h-screen bg-gray-700 w-full pt-[40px] px-2`}
    >
      <div className=" bg-gray-300 w-[full]  rounded-xl p-4 m-auto">
        {err ? (
          <h2 className="bg-red-500 p-4 text-center text-white  w-1/2 m-auto rounded-xl text-[24px]">
            {err}
          </h2>
        ) : (
          <>
            <AddItem />
            <List />
          </>
        )}
      </div>
      <Modal />
    </div>
  );
};

export default TodoCrudRedux;
