import React, { useEffect, useState } from 'react';
import './App.css';
import { mainUrls } from './api/dataRoutes';
import Display from './Display';
import List from './components/List';
import Pages from './components/Pages';

function App() {
  const [data, setData] = useState(null);
  const [fetchType, setFetchType] = useState({ type: 'characters', page: 1 });
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    fetch(`${mainUrls[fetchType.type]}${fetchType.page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, [fetchType]);

  const onPageChange = (page) => {
    setFetchType({ ...fetchType, page: page });
  };

  console.log(data);

  return (
    <div className="App">
      <button
        onClick={() => {
          const other = fetchType.type === 'characters' ? 'locations' : 'characters';
          setFetchType({ type: other, page: 1 });
          setCurrentCard(null);
        }}
      >
        dik
      </button>
      <button onClick={() => setFetchType({ type: fetchType.type, page: fetchType.page - 1 })}>prev</button>
      <button onClick={() => setFetchType({ type: fetchType.type, page: fetchType.page + 1 })}>next</button>
      <div>{fetchType.type}</div>
      {(data !== null && data !== 'Loading') && <Pages pageCount={data.info.pages} currentPage={fetchType.page} onPageChange={onPageChange} />}
      {currentCard !== null && <div>
        <Display data={currentCard} type={fetchType.type}></Display>
      </div>}
      {(data !== null && data !== 'Loading') && <List dataList={data.results} type={fetchType.type} setCurrentCard={setCurrentCard} />}
    </div>
  );
}

export default App;
