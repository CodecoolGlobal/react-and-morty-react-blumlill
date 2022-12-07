import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { mainUrls } from './api/dataRoutes';
import Display from './Display';
import List from './components/List';
import Logo from './components/Logo';
import Buttons from './components/Buttons';
import About from './components/About';
import Pages from './components/Pages';

function App() {
  const [info, setInfo] = useState(null);
  const [results, setResults] = useState(null);
  const [fetchType, setFetchType] = useState({ type: 'characters', page: 1 });
  const [currentCard, setCurrentCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(false);
  const last = useRef(null);

  useEffect(() => {
    console.log('Test2');
    if (!loading) {
      document.addEventListener('scroll', scrollCheck);
      return () => document.removeEventListener('scroll', scrollCheck);
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchType]);

  const onPageChange = (page) => {
    setFetchType({ ...fetchType, page: page });
  };

  console.log(results);
  console.log(loading);

  function scrollCheck() {
    // console.log(last.current.getBoundingClientRect().y < window.innerHeight);
    // console.log(last.current.getBoundingClientRect().y);
    // console.log(window.innerHeight);
    if (last.current.getBoundingClientRect().y - 50 < window.innerHeight) {
      console.log('Yes');
      setLoading(true);
      setFetchType({ ...fetchType, page: fetchType.page + 1 });
      fetchData();
    }
  }

  function fetchData() {
    fetch(`${mainUrls[fetchType.type]}${fetchType.page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const newResults = infinite ? [...results, ...res.results] : res.results;
        setResults(newResults);
        setInfo(res.info);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <Logo />
      <Buttons />
      <About />
      <button
        onClick={() => {
          const other = fetchType.type === 'characters' ? 'locations' : 'characters';
          setFetchType({ type: other, page: 1 });
          setCurrentCard(null);
        }}
      >
        dik
      </button>
      <input type="checkbox" onChange={() => setInfinite(!infinite)} checked={infinite} />
      <button onClick={() => setFetchType({ type: fetchType.type, page: fetchType.page - 1 })}>prev</button>
      <button onClick={() => setFetchType({ type: fetchType.type, page: fetchType.page + 1 })}>next</button>
      <div>{fetchType.type}</div>
      {info !== null && <Pages pageCount={info.pages} currentPage={fetchType.page} onPageChange={onPageChange} />}
      {currentCard !== null && (
        <div>
          <Display data={currentCard} type={fetchType.type}></Display>
        </div>
      )}
      {results !== null && <List dataList={results} type={fetchType.type} setCurrentCard={setCurrentCard} />}
      <div ref={last}></div>
    </div>
  );
}

export default App;
