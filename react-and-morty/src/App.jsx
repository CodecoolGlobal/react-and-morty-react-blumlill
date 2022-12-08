import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { mainUrls } from './api/dataRoutes';
import Display from './Display';
import List from './components/List';
import Logo from './components/Logo';
import Buttons from './components/Buttons';
import About from './components/About';
import Pages from './components/Pages';
import InfiniteScroll from './components/InfiniteScroll';

function App() {
  const [info, setInfo] = useState(null);
  const [results, setResults] = useState(null);
  const [fetchType, setFetchType] = useState({ type: null, page: null });
  const [currentCard, setCurrentCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(false);
  const [visible, setVisible] = useState(false);
  const top = useRef(null);
  const last = useRef(null);

  useEffect(() => {
    if (!loading && infinite) {
      document.addEventListener('scroll', infiniteScroll);
      return () => document.removeEventListener('scroll', infiniteScroll);
    }
  }, [loading, infinite]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchType]);

  function onPageChange(page) {
    setFetchType({ ...fetchType, page: page });
  }

  function infiniteScroll() {
    if (fetchType.page !== info.pages && last.current.getBoundingClientRect().y - 50 < window.innerHeight) {
      setFetchType({ ...fetchType, page: fetchType.page + 1 });
    }
  }

  function fetchData() {
    fetch(`${mainUrls[fetchType.type]}${fetchType.page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (fetchType.type === 'locations') {
          res.results = res.results.map((result) => {
            return { ...result, image: Math.ceil(Math.random() * 8) };
          });
        }
        const newResults = infinite ? [...results, ...res.results] : res.results;
        setResults(newResults);
        setInfo(res.info);
        setLoading(false);
      });
  }

  const locClicked = () => {
    setFetchType({ type: 'locations', page: 1 });
    setResults([]);
    setCurrentCard(null);
    console.log('locClicked');
  };

  const charClicked = () => {
    setFetchType({ type: 'characters', page: 1 });
    setResults([]);
    setCurrentCard(null);
    console.log('charClicked');
  };

  return (
    <div className="App">
      <Logo small={null !== results} />
      <Buttons locations={locClicked} characters={charClicked} />
      <About hidden={null !== results} />
      <InfiniteScroll
        setInfinite={setInfinite}
        setResults={setResults}
        setFetchType={setFetchType}
        fetchType={fetchType}
        infinite={infinite}
        results={results}
      />
      <div>{fetchType.type}</div>
      <div ref={top}></div>
      {!infinite && info !== null && (
        <Pages pageCount={info.pages} currentPage={fetchType.page} onPageChange={onPageChange} />
      )}
      {infinite && <div className="replacer"></div>}
      {currentCard !== null && (
        <div>
          <Display data={currentCard} type={fetchType.type} visible={visible} setVisible={setVisible}></Display>
        </div>
      )}
      {results !== null && <List dataList={results} type={fetchType.type} setCurrentCard={setCurrentCard} />}
      {!infinite && info !== null && (
        <Pages pageCount={info.pages} currentPage={fetchType.page} onPageChange={onPageChange} scrollTo={top.current} />
      )}
      <div ref={last}></div>
    </div>
  );
}

export default App;
