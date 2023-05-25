import React, { useEffect, useState } from 'react';
import { mainApi } from './api';

const List = ({ searchValue }) => {
  const [data, setData] = useState([]);

  console.log(searchValue);

  useEffect(() => {
    if (searchValue !== undefined) {
      const hm = async () => {
        const { data } = await mainApi.get(`?q=${searchValue}`);
        setData(data);
      };
      hm();
    }
  }, [searchValue]);

  return (
    <div>
      {data?.map(prod => (
        <article key={prod.id}>
          {prod.id} {prod.title} <br />
        </article>
      ))}
    </div>
  );
};

export default List;
