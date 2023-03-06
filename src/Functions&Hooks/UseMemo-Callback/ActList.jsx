import React, { memo } from 'react';
import Item from './Item';

const ActList = ({ acts }) => {
  console.log('list rendered');

  return (
    <ul>
      {acts?.map((act, i) => (
        <Item key={i} act={act} />
      ))}
    </ul>
  );
};

export default memo(ActList);
