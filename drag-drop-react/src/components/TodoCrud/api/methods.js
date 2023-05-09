import { mainApi } from "./api";

export const fetchData = async () => {
  try {
    const { data } = await mainApi.get('/todos');
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const sendData = async newItem => {
  try {
    const { data } = await mainApi.post('/todos', newItem);
    const all = p => [...p, data];
    return all;
  } catch (err) {
    console.error(err.message);
  } finally {
    setItem('');
    inputRef.current.focus();
  }
};

export const deleteData = async (list, id) => {
  try {
    await mainApi.delete('/todos/' + id);

    const filtered = list.filter(li => li.id !== id);
    return filtered;
  } catch (err) {
    console.error(err.message);
  }
};

const updateItem = async (list, id, newValue) => {
  const changedData = list.find(item => item.id === id);

  const updatedItem = { ...changedData, item: newValue };

  console.log(updatedItem);

  try {
    const { data } = await mainApi.put('/todos/' + id, updatedItem);
    if (data) {
      const indexOfChangedData = list.findIndex(item => item.id === id);
      console.log(data);
      list.splice(indexOfChangedData, 1, updatedItem);
      return list;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    const editor = { opened: false, value: '', id: null };
    return editor;
  }
};
