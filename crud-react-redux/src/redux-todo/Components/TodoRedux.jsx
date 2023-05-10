import AddItem from './AddItem';
import List from './List';
import Modal from './Modal';

const TodoRedux = () => {
  return (
    <div className="h-screen bg-gray-700 w-full pt-[40px] px-2">
      <div className="bg-gray-300 w-[full]  rounded-xl p-4 m-auto">
        <AddItem />
        <List />
      </div>
      <Modal />
    </div>
  );
};

export default TodoRedux;
