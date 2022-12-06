import React, { useEffect, useState } from 'react';
import './App.css';
import { mainUrls } from './api/dataRoutes';

function App() {
  const [data, setData] = useState(null);
  const [fetchType, setFetchType] = useState('characters');
  useEffect(() => {
    fetch(`${mainUrls[fetchType]}1`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [fetchType]);
  console.log(data);
  return (
    <div className="App">
      <button
        onClick={() => {
          const other = fetchType === 'characters' ? 'locations' : 'characters';
          setFetchType(other);
        }}
      >
        dik
      </button>
      <div>{fetchType}</div>
    </div>
  );
}

export default App;
