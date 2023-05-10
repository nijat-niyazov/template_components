import { useDispatch } from 'react-redux';
import { openModal, removeItem } from '../redux/slices/mainSlice';

const Item = ({ act }) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ opened: true, item: act }));
  };

  const handleDeleteItem = id => {
    dispatch(removeItem(id));
  };

  return (
    <li className="bg-red-400 p-2 flex items-center justify-between rounded-xl text-white">
      {act.id}. {act.item}
      <div>
        <button className="bg-red-800 p-2 rounded-xl mr-[5px] text-white">
          Done
        </button>
        <button
          className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
          onClick={handleOpenModal}
        >
          Edit
        </button>
        <button
          className="bg-blue-300 p-2 rounded-xl mr-[5px] text-black"
          onClick={() => handleDeleteItem(act.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
