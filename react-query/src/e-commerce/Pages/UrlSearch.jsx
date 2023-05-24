import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const UrlSearch = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const url = `https://jsonplaceholder.typicode.com/posts`;
  const mainUrl = url + '?' + searchParams.toString();

  const getData = async () => {
    const response = await axios.get(mainUrl);

    return setData(response.data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchParams]);

  return (
    <div className="h-fulldark: text-white font-bold p-4 text-center">
      <div className="bg-light_gray mb-8 p-2 col-span-2 text-black rounded-xl ">
        Sort by
      </div>
      <div className="grid grid-cols-4 gap-x-1 gap-y-3 mb-4 w-1/1.5 m-auto">
        <button
          onClick={e => {
            if (searchParams.get('_sort') === 'id') {
              searchParams.delete('_sort');
              searchParams.delete('_order');
            } else {
              searchParams.set(
                '_sort',
                e.currentTarget.innerHTML.toLowerCase()
              );
              searchParams.set('_order', 'desc');
            }
            setSearchParams(searchParams);
          }}
          className="bg-blue p-2 col-span-2 dark: text-white rounded-xl "
        >
          ID
        </button>
        <button
          className="bg-blue p-2 col-span-2 dark: text-white rounded-xl "
          onClick={e => {
            if (searchParams.get('_sort') === 'birth date') {
              searchParams.delete('_sort');
              searchParams.delete('_order');
            } else {
              if (searchParams.has('_sort') || searchParams.has('_order')) {
                searchParams.delete('_sort');
                searchParams.delete('_order');
              }
              searchParams.set(
                '_sort',
                e.currentTarget.innerHTML.toLowerCase()
              );
              searchParams.set('_order', 'desc');
            }
            setSearchParams(searchParams);
          }}
        >
          Birth Date
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="bg-red p-2 col-span-2 col-start-2 text-black rounded-xl "
        >
          Reset filter
        </button>
      </div>
      <form action="">
        <label className="block mb-2" htmlFor="search">
          Search
        </label>
        <input
          id="search"
          type="text"
          autoFocus
          className=" p-2 rounded-xl text-black  border-gray-400 border-[4px]"
          value={searchParams.get('q') ?? ''}
          onChange={e => {
            let searchValue = e.target.value;
            searchValue
              ? searchParams.set('q', searchValue)
              : searchParams.delete('q');
            setSearchParams(searchParams);
          }}
        />
        <label className="block mb-2" htmlFor="show">
          Show
        </label>
        <input
          id="show"
          type="number"
          className=" p-2 rounded-xl text-black  border-gray-400 border-[4px]"
          value={searchParams.get('_limit') ?? 4}
          onChange={e => {
            let limit = e.target.value;
            limit
              ? searchParams.set('_limit', limit)
              : searchParams.delete('_limit');
            setSearchParams(searchParams);
          }}
        />
      </form>
      <section className="mt-4">
        {data?.map(post => {
          return (
            <Link
              className="block border-yellow-300 border-[4px] mb-3"
              to={post.id}
              key={post.id}
            >
              {post.title}
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default UrlSearch;

// const filters = {};

// const params = new URLSearchParams(filters);

// query !== '' ? params.append('q', query) : params.delete('q');
// sorted ? params.append('_sort', 'id') : params.delete('_sort');
// order ? params.append('_order', order) : params.delete('_order');
// limit && params.append('_limit', limit);

// const url = `https://jsonplaceholder.typicode.com/posts`;

// const filteredUrl = url + '?' + params.toString();
// // ================= Worked ✅ ===============
