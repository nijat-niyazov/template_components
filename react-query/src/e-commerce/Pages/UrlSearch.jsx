import React, { useEffect, useState } from 'react';
import { mainApi } from '../api/mainApi';

const UrlSearch = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const getData = async query => {
    try {
      const response = await mainApi.get(`products?_page=${page}&q=${query}`);
      const paramsString = response.config.url;
      const searchParams = new URLSearchParams(paramsString);

      console.log(paramsString, searchParams);

      // for (const p of searchParams) {
      //   console.log(p); // array of
      // }

      // console.log(searchParams.get('q')); // what q eqauls to
      // console.log(searchParams.get('q') === 'samsung'); // is eqaul to
      // console.log(searchParams.getAll('q')); // array of query
      searchParams.append('q', 'webdev');
      console.log(searchParams.toString());
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('mounted');
      getData(query);
    }, 500);

    return () => {
      console.log('unmounted');
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className="h-screen text-white font-bold p-4 text-center">
      <form action="">
        <input
          type="text"
          autoFocus
          className=" p-2 rounded-xl text-black  border-gray-400 border-[4px]"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default UrlSearch;
