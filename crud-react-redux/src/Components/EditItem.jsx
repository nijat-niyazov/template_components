import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../redux/slices/mainSlice';

const EditItem = ({ modal }) => {
  // const modalOpened = useSelector(modal);
  // console.log(modal);
  const [edited, setEdited] = useState(modal.item);
  // const [title, setTitle] = useState(som.item);
  const dispatch = useDispatch();

  // console.log(edited);

  return (
    <>
      <input
        className="outline-black outline-1 outline-none mr-4 focus:outline-blue p-2 rounded-xl"
        type="text"
        autoFocus
        value={edited.item}
        onChange={e => setEdited(p => ({ ...p, item: e.target.value }))}
      />
      <button
        onClick={() => dispatch(updateItem(edited))}
        className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
      >
        Update
      </button>
    </>
  );
};

export default EditItem;
