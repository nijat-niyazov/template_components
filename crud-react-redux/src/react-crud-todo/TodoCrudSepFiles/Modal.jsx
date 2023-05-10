import { useEffect, useRef } from 'react';
import EditItem from './EditItem';

const Modal = ({ modal, setModal, list, setList }) => {
  console.log('modal rendered');

  const modalRef = useRef();

  useEffect(() => {
    const escKeyCloseModal = e => {
      e.key === 'Escape' && setModal({ opened: false });
    };
    document.addEventListener('keydown', escKeyCloseModal);

    const clickOutSideCloseModal = e => {
      modalRef.current &&
        !modalRef.current.contains(e.target) &&
        setModal({ opened: false });
    };

    document.addEventListener('mousedown', clickOutSideCloseModal);

    return () => {
      document.removeEventListener('keydown', escKeyCloseModal);
      document.removeEventListener('mousedown', clickOutSideCloseModal);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg flex w-1/3  justify-around "
      >
        {/* <input
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
        </button> */}
        <EditItem
          modal={modal}
          setModal={setModal}
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
};

export default Modal;
