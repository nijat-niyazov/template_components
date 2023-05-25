import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const SearchParams = () => {
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

  const handleSortButtonClick = sortBy => {
    if (searchParams.get('_sort') === sortBy) {
      searchParams.delete('_sort');
      searchParams.delete('_order');
    } else {
      searchParams.set('_sort', sortBy);
      searchParams.set('_order', 'desc');
    }
    setSearchParams(searchParams);
  };

  const handleInputChange = value => {
    if (value) {
      searchParams.set('q', value);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  const handleLimit = value => {
    if (value === 4) {
      searchParams.delete('_limit');
    } else {
      searchParams.set('_limit', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="h-fulldark: text-white font-bold p-4 text-center">
      <div className="bg-light_gray mb-8 p-2 col-span-2 text-black rounded-xl ">
        Sort by
      </div>
      <div className="grid grid-cols-4 gap-x-1 gap-y-3 mb-4 w-1/1.5 m-auto">
        <button
          onClick={e => handleSortButtonClick(e.target.innerHTML.toLowerCase())}
          className="bg-blue p-2 col-span-2 dark: text-white rounded-xl "
        >
          ID
        </button>
        <button
          className="bg-blue p-2 col-span-2 dark: text-white rounded-xl "
          onClick={e => handleSortButtonClick(e.target.innerHTML.toLowerCase())}
        >
          Birth Date
        </button>
        <br /> <br />
        <button
          onClick={() => setSearchParams({})}
          className="bg-red p-2 col-span-2 col-start-2 text-black rounded-xl "
        >
          Reset filter
        </button>
      </div>{' '}
      <br /> <br />
      <form action="" style={{ marginBottom: '20px' }}>
        <label className="block mb-2" htmlFor="search">
          Search
        </label>
        <input
          id="search"
          type="text"
          autoFocus
          className=" p-2 rounded-xl text-black  border-gray-400 border-[4px]"
          value={searchParams.get('q') ?? ''}
          onChange={e => handleInputChange(e.target.value)}
          style={{ marginRight: '20px' }}
        />
        <label className="block mb-2" htmlFor="show">
          Show
        </label>
        <input
          id="show"
          type="number"
          className=" p-2 rounded-xl text-black  border-gray-400 border-[4px]"
          value={5}
          onChange={e => handleLimit(e.target.value)}
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
              {post.id}. {post.title} <br /> <br />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default SearchParams;

// const filters = {};

// const params = new URLSearchParams(filters);

// query !== '' ? params.append('q', query) : params.delete('q');
// sorted ? params.append('_sort', 'id') : params.delete('_sort');
// order ? params.append('_order', order) : params.delete('_order');
// limit && params.append('_limit', limit);

// const url = `https://jsonplaceholder.typicode.com/posts`;

// const filteredUrl = url + '?' + params.toString();
// // ================= Worked ✅ ===============
