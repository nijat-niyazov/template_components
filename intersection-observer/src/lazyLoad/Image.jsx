import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageComponent = ({ img }) => {
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.onload = () => {
      setIsloaded(true);
    };

    image.src = img;
  }, [img]);

  return (
    <>
      <div style={{ display: isLoaded ? 'none' : 'inline' }}>
        <Blurhash
          hash="L25E,K^nxcR.xas:s;j]NZR*jJsq"
          width={300}
          height={300}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        style={{ display: isLoaded ? 'none' : 'inline' }}
        className="w-[400px] object-cover"
        src={img}
        alt=""
      />
    </>
  );
};

export default ImageComponent;
