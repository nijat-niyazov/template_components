import { mainApi } from './api/api';

const Item = ({ id, item, setList, list, setModal }) => {
  const removeItem = async id => {
    try {
      await mainApi.delete('/todos/' + id);

      setList(list.filter(li => li.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <li className="bg-red-400 p-2 flex items-center justify-between rounded-xl text-white">
      {id}. {item}
      <div>
        <button
          className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
          onClick={() => setModal({ opened: true, item: { id, item } })}
        >
          Edit
        </button>
        <button
          className="bg-blue-300 p-2 rounded-xl mr-[5px] text-black"
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
