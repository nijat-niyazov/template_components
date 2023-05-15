import React from 'react';

const List = ({ list }) => {
  // console.log(list);
  return (
    <ul>
      {list?.map(item => (
        <li className="bg-red-500 text-white p-2 rounded-xl mb-3" key={item.id}>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
