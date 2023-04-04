import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Modal = forwardRef(({ setOpen }, ref) => {
  console.log(ref);

  const closeref = useRef();
  const yesref = useRef();
  const noneref = useRef();

  useImperativeHandle(ref, () => {
    return {
      focusCloseRef: () => closeref.current.focus(),
      focusYesRef: () => yesref.current.focus(),
      focusNoneRef: () => noneref.current.focus(),
    };
  });

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        marginTop: '540px',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '400px',
        height: '400px',
        border: '1px solid black',
      }}
    >
      <button
        ref={closeref}
        onClick={() => setOpen(false)}
        style={{ width: '40px', height: '40px' }}
      >
        x
      </button>
      <h1>Titlte</h1>
      <span>Want to confirm?</span>
      <div className="btns">
        <button
          style={{
            backgroundColor: 'green',
            width: '40px',
            height: '40px',
            marginRight: '40px',
          }}
          ref={yesref}
        >
          yes
        </button>
        <button
          ref={noneref}
          style={{
            backgroundColor: 'red',
            width: '40px',
            height: '40px',
            marginRight: '40px',
          }}
        >
          No
        </button>
      </div>
    </div>
  );
});

export default Modal;
