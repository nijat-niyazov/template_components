import { forwardRef } from 'react';

const Book = forwardRef(({ book, i, startChanger }, ref) => {
  // console.log(i === 40 ? i : '');
  return (
    <>
      <article
        ref={ref && i !== 40 ? ref : null}
        className={ref ? 'last' : 'notLast'}
        style={ref ? { background: 'brown', color: 'aqua' } : null}
      >
        <h2>Title: {book}</h2>
      </article>
      {ref && i === 40 ? (
        <button
          onClick={startChanger}
          style={{ margin: '20px', width: '100px', height: '50px' }}
        >
          Okay
        </button>
      ) : null}
    </>
  );
});

export default Book;
