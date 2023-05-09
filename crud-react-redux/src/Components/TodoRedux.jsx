import { useSelector } from 'react-redux';
import AddItem from './AddItem';
import List from './List';
import Modal from './Modal';
import { modalOpened } from '../redux/slices/mainSlice';

const TodoRedux = () => {
  const modal = useSelector(modalOpened);

  return (
    <div className="h-screen bg-gray-700 w-full pt-[40px] px-2">
      <div className="bg-gray-300 w-[full]  rounded-xl p-4 m-auto">
        <AddItem />
        <List />
      </div>
      {modal && <Modal />}
    </div>
  );
};

export default TodoRedux;
