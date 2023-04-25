import { forwardRef, memo } from 'react';

const AddTodo = forwardRef(({ todo, onChange, submitForm }, ref) => {
  /**
   * ! NOTE --forwarRef must be before props && ref ALWAYS MUST BE added to the end
   */

  console.log('adding rendered');

  return (
    <form action="" onSubmit={submitForm}>
      <input type="text" value={todo} onChange={onChange} ref={ref} />
      <button disabled={!todo} type="submit">
        Add
      </button>
    </form>
  );
});

export default memo(AddTodo);
