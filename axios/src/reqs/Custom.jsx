import axios from 'axios';
import { useEffect } from 'react';
import { authFetch } from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await authFetch('/react-store-products');
      const res2 = await axios(randomUserUrl);
      console.log(res1, res2);
      return [res1, res2];
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
