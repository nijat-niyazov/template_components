import { useState } from 'react';
import axios from 'axios';
const url = 'https://course-api.com/axios-tutorial-post';

const PostRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(url, { name: name, email: email });
      console.log(res);
    } catch (err) {}
    // console.log(name, email);
  };

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
            <input
              type="text"
              className="form-input"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
            <input
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{
            backgroundColor: 'aqua',
            color: 'black',
            padding: '10px',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
