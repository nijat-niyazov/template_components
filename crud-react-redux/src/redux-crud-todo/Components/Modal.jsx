import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, modal } from '../slices/todoSlice';
import EditItem from './EditItem';

const Modal = () => {
  const dispatch = useDispatch();

  const modalRef = useRef();
  const modalOpened = useSelector(modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    const escKeyCloseModal = e => {
      e.key === 'Escape' && handleCloseModal();
    };

    document.addEventListener('keydown', escKeyCloseModal);

    const clickOutSideCloseModal = e => {
      modalRef.current &&
        !modalRef.current.contains(e.target) &&
        handleCloseModal();
    };

    document.addEventListener('mousedown', clickOutSideCloseModal);

    return () => {
      document.removeEventListener('keydown', escKeyCloseModal);
      document.removeEventListener('mousedown', clickOutSideCloseModal);
    };
  }, []);

  if (!modalOpened.opened) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg flex w-1/3  justify-around "
      >
        <EditItem modal={modalOpened} />
      </div>
    </div>
  );
};

export default Modal;
