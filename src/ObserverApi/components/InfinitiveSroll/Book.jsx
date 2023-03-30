import { forwardRef } from 'react';

const Book = forwardRef(({ book }, ref) => {
  return (
    <article
      ref={ref ? ref : null}
      className={ref ? 'last' : 'notLast'}
      style={ref ? { background: 'brown', color: 'aqua' } : null}
    >
      <h2>Title: {book.title}</h2>
      <h4>Author: {book.author_name?.at(0)}</h4>
      <p>Year: {book.first_publish_year}</p> <br />
    </article>
  );
});

export default Book;
