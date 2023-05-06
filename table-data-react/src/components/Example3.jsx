import React, { useEffect, useMemo, useState } from 'react';

function Example3({ data }) {
  const [activePage, setActivePage] = useState(1);
  const [showTables, setShowTables] = useState(10);
  const [result, setResult] = useState(showTables);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log('seffect');
    setFilteredData(
      data
      .filter(item => item.value > 100)
      .slice(showTables * (activePage - 1), result)
      );
    }, [data, showTables, activePage, result]);
    
    const filteredData2 = useMemo(() => {
    console.log('memo');
    return data
      .filter(item => item.value > 100)
      .slice(showTables * (activePage - 1), result);
  }, [data, showTables, activePage, result]);

  return (
    <div>
      <h1>Filtered Data with useEffect: {filteredData.length} items</h1> <br />
      <br />
      <h1>Filtered Data with useMemo: {filteredData2.length} items</h1> <br />
      <br />
      <button onClick={() => setShowTables(5)}>Show 5 Items</button> <br />
      <br />
      <button onClick={() => setShowTables(10)}>Show 10 Items</button> <br />
      <br />
      <button onClick={() => setActivePage(2)}>Go to Page 2</button> <br />
      <br />
      <button onClick={() => setResult(20)}>Show 20 Results</button> <br />
      <br />
    </div>
  );
}

export default Example3;
