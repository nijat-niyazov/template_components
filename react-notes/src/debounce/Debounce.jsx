const url = 'https://jsonplaceholder.typicode.com/posts/';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from './Post';

const Debounce = () => {
  const [search, setSearch] = useState('');
  const [timer, setTimer] = useState(null);
  const [posts, setPosts] = useState([]);

  const findPost = async () => {
    try {
      const { data } = await axios.get(url);
      if (data) {
        setPosts(data.filter(each => each.body.toLowerCase().includes(search)));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    findPost();
  }, []);

  const searchHandle = e => {
    setSearch(e.target.value);
    clearTimeout(timer);
    // first we remove previous one and then create new one ⤵

    setTimer(
      setTimeout(() => {
        findPost(search);
      }, 1000)
    );
  };

  
  return (
    <div>
      <input type="text" value={search} onChange={e => searchHandle(e)} />
      <Post posts={posts} />
    </div>
  );
};

export default Debounce;
