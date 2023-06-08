import { ListProps } from '../interfaces';

const List = <Item,>({ items, render }: ListProps<Item>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
