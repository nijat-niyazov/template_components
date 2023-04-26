import { memo, useState } from 'react';

const ModalRegular = ({ closeModal, opened }) => {
  const [op, setOp] = useState(false);

  console.log('regular rendered');

  return (
    opened && (
      <div
        className="modal"
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Modal</p>
        <button onClick={() => setOp(p => !p)}>click</button>

        <button onClick={closeModal}>Close Modal</button>
      </div>
    )
  );
};

export default memo(ModalRegular);
