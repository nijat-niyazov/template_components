import { useEffect, useLayoutEffect, useRef, useState } from 'react';

setInterval(() => {
  let user = 0;

  for (let i = 0; i < 1e8; i++) {
    user++;
  }
}, 2);

const LayoutEffect = () => {
  const chatRef = useRef(null);
  const articleRef = useRef(null);

  const [style, setstyle] = useState({ background: 'black', color: 'white' });
  const [num, setnum] = useState(0);

  // useEffect(() => {
  //   const number = Math.floor(Math.random() * 50);
  //   setstyle({ ...style, padding: number + 'px' });
  // }, [num]);

  /**
   * ! USELAYOUTEFFECT runs function syncronosly which is block code till function is executed
   */

  useLayoutEffect(() => {
    const number = Math.floor(Math.random() * 50);

    setstyle({ ...style, paddingTop: number + 'px' });
  }, [num]);

  // useLayoutEffect(() => {
  //   if (!chatRef.current) return;
  //   console.log(
  //     chatRef.current.scrollHeight - chatRef.current.scrollTop,
  //     chatRef.current.scrollHeight,
  //     chatRef.current.scrollTop
  //   );
  //   chatRef.current.scrollTop = chatRef.current.scrollHeight;
  // }, [names]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(chatRef.current.scrollTop);
  //   };
  //   chatRef.current.addEventListener('scroll', handleScroll);
  //   return () => chatRef.current.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <article ref={articleRef} style={style}>
        <p>{num}</p>
        <button onClick={() => setnum(p => p + 1)}>increase</button>
        <button>decrease</button>
      </article>
      {/* <div
        ref={chatRef}
        style={{
          overflowY: 'auto',
          height: '200px',
          width: '300px',
          background: 'black',
          color: 'white',
          // marginTop: '102px',
          // paddingTop: '50px',
        }}
      >
        {names?.map((name, i) => (
          <>
            <div key={i}>
              {i + 1}.{(' ', name.name)}
            </div>
            <div>okay</div>
            <div>okay</div>
            <div>okay</div>
            <div>okay</div>
            <div>okay</div>
          </>
        ))}
      </div> */}
    </>
  );
};

export default LayoutEffect;
