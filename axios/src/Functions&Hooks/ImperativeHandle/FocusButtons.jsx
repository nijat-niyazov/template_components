import React, { useRef, useState } from 'react';
import Modal from './Modal';

const FocusButtons = () => {
  const [open, setOpen] = useState(false);
  const modalref = useRef();

  console.log(open);

  return (
    <header>
      <button onClick={() => setOpen(!open)}>Open</button>
      <button onClick={() => modalref.current.focusCloseRef()}>
        Focus close
      </button>
      <button onClick={() => modalref.current.focusYesRef()}>Focus yes</button>

      <button onClick={() => modalref.current.focusNoneRef()}>Focus no</button>

      {open && <Modal ref={modalref} title="title" setOpen={setOpen} />}
    </header>
  );
};

export default FocusButtons;
