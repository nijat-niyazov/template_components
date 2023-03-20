import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { closeModal } from '../redux/slices/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const modalCloser = () => {
    dispatch(closeModal());
  };

  const cartCleaner = () => {
    dispatch(clearCart());
    modalCloser();
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure?</h4>
        <div className="btn-container">
          <button
            onClick={cartCleaner}
            type="submit"
            className="btn confirm-btn"
          >
            Confirm
          </button>
          <button
            onClick={modalCloser}
            type="button"
            className="btn cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
