import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Page from './Page';

let totalPages = 0;
export const findTotalPages = num => (totalPages = num);

const Paginated = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState(+searchParams.get('page') || 1);
  const [sorted, setSorted] = useState(searchParams.get('sorted') || false);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [query, setQuery] = useState('');

  const sortedBy = searchParams.get('sorted');
  const brands = searchParams.getAll('brand');
  const search = searchParams.get('q');
  console.log(search === query, { search, query });

  useEffect(() => {
    searchParams.set('page', pageNum.toString());

    if (query) {
      console.log('if');
      searchParams.set('q', query);
    } else {
      console.log('else');
      searchParams.delete('q');
    }

    if (sorted) {
      searchParams.set('sorted', 'id');
    } else {
      searchParams.delete('sorted');
    }

    if (selectedBrands.length !== 0) {
      searchParams.delete('brand');
      selectedBrands.forEach(brand => {
        searchParams.append('brand', brand);
      });
    } else {
      searchParams.delete('brand');
    }

    setSearchParams(searchParams);
  }, [pageNum, sorted, selectedBrands, query]);

  // console.log(searchParams.toString());

  const handleSort = () => {
    setSorted(p => !p);
  };

  const handleResetFilters = () => {
    setSearchParams({});
  };

  const handleCheckedBrand = e => {
    const { name, value } = e.target;
    // !selectedBrands.some(brand => brand[name])
    //   ? setSelectedBrands(p => [...p, { [name]: value }])
    //   : setSelectedBrands(selectedBrands.filter(each => each[name] !== value));

    if (selectedBrands.includes(value)) {
      setSelectedBrands(selectedBrands.filter(each => each !== value));
    } else {
      setSelectedBrands(p => [...p, value]);
    }
  };

  return (
    <div>
      <h2 className="text-center font-bold text-[50px]">Paginated</h2>
      <button onClick={handleResetFilters}>Reset filters</button>
      <button
        onClick={handleSort}
        className={`${
          sorted ? 'bg-yellow' : 'bg-red'
        } p-2 text-white m-auto flex items-center justify-center rounded-md`}
      >
        Ordered ⬇
      </button>

      <aside>
        <input
          onChange={handleCheckedBrand}
          type="checkbox"
          id="apple"
          name="apple"
          value="Apple"
        />
        <label htmlFor="apple"> Apple</label>
        <br />
        <input
          onChange={handleCheckedBrand}
          type="checkbox"
          id="samsung"
          name="samsung"
          value="Samsung"
        />
        <label htmlFor="samsung"> Samsung</label>
        <br />
        <input
          onChange={handleCheckedBrand}
          type="checkbox"
          id="huawei"
          name="huawei"
          value="Huawei"
        />
        <label htmlFor="huawei">Huawei</label>
        <br />
      </aside>

      <aside className="block text-center w-1/2 m-auto">
        <label htmlFor="find">Find </label>
        <input
          type="text"
          value={query}
          placeholder="Find our item"
          className="border-black border-2 rounded-md p-2"
          onChange={e => setQuery(e.target.value)}
        />
      </aside>

      <Page
        pageNum={pageNum}
        sorted={sortedBy ? sortedBy : sorted}
        brands={brands}
        query={search}
      />
      {/* <div style={{ display: 'none' }}>
        <Page pageNum={pageNum + 1} /> */}
      {/* it's allowed to write like this because of cache. We don't display this UI but cache this query for better UX*/}
      {/* </div> */}

      <aside className="bg-blue-300 m-2 p-2 flex justify-between items-center ">
        <button
          disabled={pageNum === 1}
          onClick={() => setPageNum(p => p - 1)}
          className="bg-red p-2 rounded-lg font-bold italic disabled:opacity-50"
        >
          Prev Page
        </button>

        {/* <div className="w-1/2 flex gap-2 bg-aqua overflowY-hidden">
          {Array.from({ length: totalProducts ?? 200 }, (_, p) => {
            return (
              <button
                key={p}
                // disabled={isPreviousData}
                className={` w-full  whitespace-nowrap text-ellipsis p-2 rounded-lg font-bold italic disabled:opacity-50`}
                //   ${
                //   data.activePage === p + 1
                //     ? 'bg-red-500 text-white'
                //     : 'bg-amber-400'
                // }
              >
                {p + 1}
              </button>
            );
          })}
        </div> */}

        <div className="overflow-x-scroll w-1/2  whitespace-nowrap border bg-aqua p-4 cursor-grab">
          <div className="flex items-center space-x-4">
            {Array.from({ length: 20 }, (_, p) => (
              <button
                key={p}
                className={`${
                  pageNum === p + 1 ? 'bg-red-500 text-white' : 'bg-amber-400'
                } w-full text-ellipsis p-2 rounded-lg font-bold italic disabled:opacity-50`}
              >
                {p + 1}
              </button>
            ))}
          </div>
        </div>

        <button
          // disabled={isPreviousData || pageNum === data.totalPages}
          onClick={() => setPageNum(p => p + 1)}
          className="bg-yellow p-2 rounded-lg font-bold italic disabled:opacity-50"
        >
          Next Page
        </button>
      </aside>
    </div>
  );
};

export default Paginated;
