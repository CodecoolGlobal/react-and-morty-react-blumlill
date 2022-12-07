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
  const last = useRef(null);

  useEffect(() => {
    if (!loading) {
      document.addEventListener('scroll', scrollCheck);
      return () => document.removeEventListener('scroll', scrollCheck);
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    fetch(`${mainUrls[fetchType.type]}${fetchType.page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResults(res.results);
        setInfo(res.info);
        setLoading(false);
      });
  }, [fetchType]);

  const onPageChange = (page) => {
    setFetchType({ ...fetchType, page: page });
  };

  console.log(results);

  function scrollCheck() {
    if (last.current.getBoundingClientRect().y < window.innerHeight) {
      console.log('Yes');
      setLoading(true);
    }
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
      <button
        onClick={() => {
          console.log(last.current.getBoundingClientRect());
        }}
      >
        Test
      </button>
    </div>
  );
}

export default App;
