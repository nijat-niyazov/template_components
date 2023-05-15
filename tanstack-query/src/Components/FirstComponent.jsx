import { useQuery } from 'react-query';

const FirstComponent = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/posts?page=1&_limit=10').then(
      res => res.json()
    )
  );

  return (
    <div className="bg-blue-300 p-4 text-center h-screen w-full">
      <h1 className="uppercase bg-blue-600 rounded-xl px-6 py-4 font-bold text-white">
        React Query
      </h1>

      <div
        className={`bg-red-300 flex flex-col gap-4 p-4 mt-4 ronded-xl ${
          isLoading && 'bg-opacity-10'
        }`}
      >
        {isLoading && (
          <h2 className=" bg-blue-400 rounded-sm p-4 bg-opacity-50">
            Loading...
          </h2>
        )}
        {!isLoading &&
          data?.map(p => (
            <article className=" text-justify flex flex-col gap-2 capitalize border-black border-2 p-2 rounded-lg">
              <h2>{p.title}</h2>
              <p>{p.body}</p>
              <span>Written by {p.id}</span>
            </article>
          ))}
      </div>
    </div>
  );
};

export default FirstComponent;
