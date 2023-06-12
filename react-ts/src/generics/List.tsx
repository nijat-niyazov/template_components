type ListProps<T> = {
  // <T> is type
  items: T[]; // it means type comes from prop passed element
  onClick: (value: T) => void; // onClick we get value which is string
};
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 mt-10 p-10">
      <h2>List of items</h2>
      {items.map((item, i) => (
        <article onClick={() => onClick(item)} key={i}>
          {/* {item} */}
        </article>
      ))}
    </div>
  );
};

export default List;
