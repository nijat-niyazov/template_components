import { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';

const Modal = ({}, ref) => {
  // you have to have something to have ref as second argument
  const [modal, setModal] = useState(false);

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    // first param is ref, then functions 

    openModal: () => setModal(true),
    // we do this by reach openModal in parent
    focus: () => inputRef.current.focus(),
    // this is our function which will be reacheble in parent
  }));

  console.log('child rendered');

  return (
    modal && (
      <div
        className="modal"
        style={{
          width: '300px',
          height: '200px',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <p>Modal</p>
          <button onClick={() => setModal(false)}>Close Modal</button>
        </div>
        <br /> <br />
        <input type="text" ref={inputRef} />
      </div>
    )
  );
};

export default memo(forwardRef(Modal));
