import { memo } from 'react';

const Header = () => {
  console.log('header rendred');

  return <div>Header</div>;
};

export default memo(Header);
// in react if parent is rendered then child also rendered that's why we use memo because we don't want it to be rendered when parent element is rendered.
