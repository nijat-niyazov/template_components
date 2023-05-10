import { useSelector } from 'react-redux';
import { list } from '../redux/slices/mainSlice';
import Item from './Item';

const List = () => {
  const data = useSelector(list);

  return (
    <ul className="mt-[40px] flex flex-col gap-[20px] m-auto w-full">
      {data?.length > 0 ? (
        data.map(act => {
          return <Item key={act.id} act={act}  />;
        })
      ) : (
        <div className="flex justify-center items-center w-1/2 m-auto p-4 bg-gray-600 rounded-2xl text-white">
          <h2 className=" cursor-grab active:cursor-grabbing">Nothing yet</h2>
        </div>
      )}
    </ul>
  );
};

export default List;
