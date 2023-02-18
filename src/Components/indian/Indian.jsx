import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';

const Indian = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('he is loogged out');
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=${page}&sparkline=false`
      );

      setCoinsData(prev => {
        return [...prev, ...data];
      });
      setLoading(false);
    }, 1500);
  }, [page]);

  console.log(coinsData);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={coinsData} />
      {/* {loading && <Loader />} */}
    </div>
  );
};

export default Indian;
