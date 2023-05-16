import { useCallback, useEffect, useRef, useState } from 'react';
import { mainApi } from './api';

const InfinitiveScroll = () => {
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const fetchData = async () => {
    setisLoading(true);

    try {
      const res = await mainApi.get(`/posts?page=${pageNum}&_limit=20`);

      if (res.status !== 200) {
        throw new Error('Something went wrong');
      }

      setisLoading(false);
      setPosts(prev => [...prev, res.data]);
      // setPageNum(p => p + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  console.log(posts, isLoading, error);

  // useEffect(() => {
  //   console.log(pageNum);
  //   // setPosts(p => [...p, data]);
  // }, [data]);

  const observerTarget = useRef(null);

  // useEffect(() => {
  //   console.log(observerTarget.current);
  //   const options = { threshold: 1 };

  //   console.log(observerTarget.current);

  //   const observer = new IntersectionObserver(entries => {
  //     console.log(entries[0]);
  //     if (entries[0].isIntersecting) {
  //       // fetchData();
  //       console.log('yes');
  //       console.log(entries[0]);
  //     }
  //   }, options);

  //   if (observerTarget.current) {
  //     observer.observe(observerTarget.current);
  //   }

  //   return () => {
  //     if (observerTarget.current) {
  //       observer.unobserve(observerTarget.current);
  //     }
  //   };
  // }, [observerTarget]);

  // const handleScroll = () => {
  //   const windowHeight = window.innerHeight;
  //   const documentHeight = document.documentElement.offsetHeight;
  //   const scrollFromTopOnDocument = document.documentElement.scrollTop;

  //   if (windowHeight + scrollFromTopOnDocument >= documentHeight - 400) {
  //     setPageNum(p => p + 1);
  //   }
  //   return;
  // };

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);
  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, [pageNum]);

  const intObserver = useRef();

  const lastPostRef = useCallback(
    post => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver(entries => {
        console.log(entries);

        if (entries[0].isIntersecting) {
          console.log('intersected');
          // setPageNum(p => p + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading]
  );

  return (
    <>
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-75">
          <div className="text-white text-[50px]"></div>
        </div>
      )}
      {error && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-200 bg-opacity-75">
          <div className=" text-black text-[50px]">
            <h2>{error}</h2>
          </div>
        </div>
      )} */}
      {/* {!error && !isLoading && (
        <div className="">
          <div className=" p-10">
            {posts?.map(post => {
              if (post.id === posts?.length) {
                return <Post ref={lastPostRef} post={post} key={post.id} />;
              }
              return <Post post={post} key={post.id} />;
            })}
          </div>
          {isLoading && <h2>Loading...</h2>}
        </div>
      )} */}

      <div className="">
        <ul>
          {posts?.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
    </>
  );
};

export default InfinitiveScroll;
