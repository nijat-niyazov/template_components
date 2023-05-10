import { useEffect, useRef, useState } from 'react';
import AddItem from './AddItem';
import ListOfItems from './List';
import Modal from './Modal';
import { mainApi } from './api/api';

const TodoCrudSepFiles = () => {
  const [list, setList] = useState([]);

  const [modal, setModal] = useState({
    opened: false,
  });

  const fetchRef = useRef(true);

  useEffect(() => {
    if (fetchRef.current === true) {
      const fetchData = async () => {
        try {
          const { data } = await mainApi.get('/todos');
          setList(data);
        } catch (err) {
          console.error(err.message);
        }
      };
      fetchData();
    }

    return () => {
      fetchRef.current = false;
    };
  }, []);

  return (
    <div className="h-screen bg-gray-700 w-full pt-[40px] px-2">
      <div className="bg-gray-300 w-[full]  rounded-xl p-4 m-auto">
        <AddItem setList={setList} list={list} />
        <ListOfItems list={list} setList={setList} setModal={setModal} />
      </div>

      {modal.opened && (
        <Modal
          modal={modal}
          setModal={setModal}
          list={list}
          setList={setList}
        />
      )}
    </div>
  );
};

export default TodoCrudSepFiles;
