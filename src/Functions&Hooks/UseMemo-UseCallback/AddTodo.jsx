import React, { memo } from 'react';

const AddTodo = ({ todo, onChange, addAct }) => {
  console.log('adding rendered');

  return (
    <div>
      <form action="" onSubmit={addAct}>
        <input type="text" value={todo} onChange={onChange} />
        <button disabled={!todo} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default memo(AddTodo);
