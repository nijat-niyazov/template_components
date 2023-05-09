import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edited, updateItem } from '../redux/slices/mainSlice';

const EditItem = () => {
  const som = useSelector(edited);
  const [title, setTitle] = useState(som.item);
  const dispatch = useDispatch();

  return (
    <>
      <input
        className="outline-black outline-1 outline-none mr-4 focus:outline-blue p-2 rounded-xl"
        type="text"
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        onClick={() => dispatch(updateItem({ ...som, item: title }))}
        className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
      >
        Update
      </button>
    </>
  );
};

export default EditItem;
