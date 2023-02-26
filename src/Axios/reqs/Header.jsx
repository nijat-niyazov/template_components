import { useState } from 'react';
import axios from 'axios';
import { border } from '@chakra-ui/react';
import { useEffect } from 'react';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  // useEffect(() => {
  const fetchDadJoke = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      console.log(data.joke);
      setJoke(data.joke);
    } catch (err) {
      console.log(err.response);
    }
  };
  // fetchDadJoke();
  // }, []);

  return (
    <section className="section text-center">
      <button
        className="btn"
        onClick={fetchDadJoke}
        style={{
          backgroundColor: 'aqua',
          color: 'black',
          padding: '10px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
