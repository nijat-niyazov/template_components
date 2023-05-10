import { mainApi } from "./api/api";

const EditItem = ({ modal, setModal, setList, list }) => {
  console.log(modal);

  const updateItem = async id => {
    const changedData = list.find(item => item.id === id);

    const updatedItem = { ...changedData, item: modal.item.item };

    try {
      const { data } = await mainApi.put('/todos/' + id, updatedItem);
      if (data) {
        const indexOfChangedData = list.findIndex(item => item.id === id);
        list.splice(indexOfChangedData, 1, updatedItem);
        setList(list);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setModal({ opened: false });
    }
  };

  return (
    <>
      <input
        className="outline-black outline-1 outline-none mr-4 focus:outline-blue p-2 rounded-xl"
        type="text"
        autoFocus
        value={modal.item.item}
        onChange={e =>
          setModal(p => ({
            ...p,
            item: { ...p.item, item: e.target.value },
          }))
        }
      />
      <button
        onClick={() => updateItem(modal.item.id)}
        className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
      >
        Update
      </button>
    </>
  );
};

export default EditItem;
