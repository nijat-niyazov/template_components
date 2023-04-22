import { memo } from 'react';

const Header = ({ creator, people }) => {
  console.log('header rendred');
  const ppp = people?.map(p => p.name);

  // console.log(filteredTodos?.length > 0 ? filteredTodos[0] : '');

  return (
    <>
      <p>{creator}</p>
      {/* <ul>
        {ppp.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul> */}
    </>
  );
};

export default memo(Header);
// export default Header;
// in react if parent is rendered then child also rendered that's why we use memo because we want this component to be rendered only when its prop has changed.
