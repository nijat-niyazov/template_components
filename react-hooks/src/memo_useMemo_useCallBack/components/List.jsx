import { memo } from 'react';
import Item from './Item';

const List = ({ list }) => {
  console.log('list rendered');

  return (
    <ul style={{ listStyle: 'none' }}>
      {list?.map((todo, i) => (
        <Item key={i} todo={todo} />
      ))}
    </ul>
  );
};

export default memo(List);
