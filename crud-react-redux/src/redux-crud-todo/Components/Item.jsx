import { useDispatch } from 'react-redux';
import { dateFormat } from '../date/Date';
import { openModal, removeItem } from '../slices/todoSlice';

const Item = ({ act }) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ opened: true, item: act }));
  };

  const handleDeleteItem = id => {
    dispatch(removeItem(id));
  };

  return (
    <li className="bg-red-400 p-2 flex  items-center justify-between text-[14px] md:text-[16px] rounded-xl text-white">
      <div className="w-[85%] flex flex-col justify-start items-start md:items-start md:justify-center">
        <span>
          {act.id}. {act.item}
        </span>
        <p className="italic p-2 bg-red-800 rounded-xl">
          {dateFormat(act.date)}
        </p>
      </div>
      <div className="ml-auto grid md:flex items-center jc gap-[15px] grid-cols-2 ">
        <button className="bg-red-800 p-2 md:py-2 rounded-xl w-min  text-white">
          Done
        </button>
        <button
          className="bg-green-300 w-min p-2 rounded-xl  text-black"
          onClick={handleOpenModal}
        >
          Edit
        </button>
        <button
          className="bg-blue-300 p-2 rounded-xl text-black col-span-2"
          onClick={() => handleDeleteItem(act.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
