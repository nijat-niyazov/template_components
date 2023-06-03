import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Page from './Page';

let totalPages = 0;
export const findTotalPages = num => (totalPages = num);

const Paginated = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState(+searchParams.get('page') || 1);
  // const [pageNum, setPageNum] = useState(+searchParams.get('page') || 1);-

  useEffect(() => {
    searchParams.set('page', pageNum);

    setSearchParams(searchParams);
  }, [pageNum]);

  return (
    <div>
      <h2 className="text-center font-bold text-[50px]">Paginated</h2>

      <Page pageNum={pageNum} />
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
