import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../slices/todoSlice';
// import { updateItem } from '../slices/todoSlice';

const EditItem = ({ modal }) => {
  const [edited, setEdited] = useState(modal.item);
  const dispatch = useDispatch();

  const handleUpdate = id => {
    dispatch(updateItem({ id: modal.item.id, post: edited }));
  };
  const changePost = e => {
    setEdited(p => ({ ...p, item: e.target.value }));
  };

  return (
    <>
      <input
        className="outline-black outline-1 outline-none mr-4 focus:outline-blue p-2 rounded-xl"
        type="text"
        autoFocus
        value={edited.item}
        onChange={changePost}
      />
      <button
        onClick={handleUpdate}
        className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
      >
        Update
      </button>
    </>
  );
};

export default EditItem;
