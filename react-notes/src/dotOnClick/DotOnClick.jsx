import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DotOnClick = () => {
  const [dots, setDots] = useState([]);
  const [removed, setRemoved] = useState([]);

  const section = useRef();

  useEffect(() => {
    const handleClick = e => {
      const { clientX, clientY } = e;

      // console.log(clientX, clientY - section?.current?.offsetTop);
      // console.log(section.current.offsetTop);

      if (clientY - section?.current?.offsetTop > 12) {
        setDots(p => [
          ...p,
          { left: clientX, top: clientY - section?.current?.offsetTop },
        ]);
      } else {
        toast.error('is not allowed click on there', {
          duration: 2000,
          position: 'top-right',

          // Styling
          style: {
            background: 'pink',
          },
          className: '',

          // Custom Icon
          icon: '❌',

          // Change colors of success/error/loading icon
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
      }
    };

    section.current?.addEventListener('click', handleClick);

    return () => section.current?.removeEventListener('click', handleClick);
  }, []);

  const handleUndo = () => {
    // dots.pop();
    const lastOne = dots.at(-1);
    setRemoved(p => [lastOne, ...p]);
    setDots(dots.slice(0, -1));
  };

  const handleRedo = () => {
    setRemoved(removed.splice(0, 1));
    setDots(p => [...p, removed[0]]);
  };

  console.log(removed);

  return (
    <div>
      <Toaster />

      <section className="flex gap-2  items-center justify-center border-b-2 border-black p-2  bg-yellow-300">
        <button
          disabled={dots.length === 0}
          className="bg-green-300 disabled:opacity-50 disabled:bg-gray-600 p-2 rounded-md text-xl text-center border-none cursor pointer hover:bg-green-600"
          onClick={handleUndo}
        >
          Undo
        </button>
        <button
          disabled={removed.length === 0}
          className="bg-red-300 disabled:opacity-50 disabled:bg-gray-600 p-2 rounded-md text-xl text-center border-none cursor pointer hover:bg-red-600"
          onClick={handleRedo}
        >
          Redo
        </button>
      </section>

      <section
        ref={section}
        className="relative w-full h-screen cursor-pointer"
      >
        {dots?.map((dot, i) => {
          // console.log(dot);
          return (
            <article
              style={{
                position: 'absolute',
                left: dot.left,
                top: dot.top,
                transform: 'translate(-50%,-50%)',
              }}
              className="bg-blue-300 rounded-full p-3 inline-block absolute"
              key={i}
            ></article>
          );
        })}
      </section>
    </div>
  );
};

export default DotOnClick;
