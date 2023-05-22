import React, { useState } from 'react';

const Compared = () => {
  const [query, setQuery] = useState(null);
  const [products, setProducts] = useState(null);

  return (
    <section>
      <form className="grid items-center justify-center ">
        <label htmlFor="" className="text-center">
          <span className="text-[20px] font-bold"> Find Product</span>
          <input
            type="text"
            value={query}
            className="block p-2 border-[2px] m-2 rounded-lg focus:border-black"
            onChange={e => setQuery(e.target.value)}
          />
        </label>
      </form>
      {/* <table className="border-black border-1 border-dashed ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
      </table> */}
    </section>
  );
};

export default Compared;
