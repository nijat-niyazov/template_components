import { useCallback, useRef, useState } from 'react';
import Modal from './Modal';
import ModalRegular from './ModalRegular';

const Imperative = () => {
  const modalRef = useRef();

  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);

  /**
   * ! USEIMPERATIVE used for trigger child element from parent without rendering parent
   */

  const handleOpeningModal = () => {
    modalRef.current.openModal();
  };

  const focus = () => {
    modalRef.current.focus();
  };

  console.log('parent rendered');

  // const closeModal = () => setModal(false);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <div>
      <p>Parent</p>
      <button>click</button>
      <Modal ref={modalRef} />
      <button onClick={handleOpeningModal}>Open</button>
      <button onClick={focus}>focus</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <article>
        <button onClick={() => setModal(true)}>Open Reg Modal</button>
        <ModalRegular opened={modal} closeModal={closeModal} />
        <h3>{count}</h3>
        <button onClick={() => setCount(p => p + 1)}>increase </button>
      </article>
    </div>
  );
};

export default Imperative;
