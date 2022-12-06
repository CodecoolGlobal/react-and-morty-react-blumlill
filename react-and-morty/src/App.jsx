import React, { useEffect, useState } from 'react';
import './App.css';
import { mainUrls } from './api/dataRoutes';
import Display from './Display';
function App() {
  const [data, setData] = useState(null);
  const [fetchType, setFetchType] = useState({ type: 'characters', page: 1 });
  useEffect(() => {
    
    fetch(`${mainUrls[fetchType.type]}${fetchType.page}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, [fetchType]);
  console.log(data);
  return (
    <div className="App">
      <button
        onClick={() => {
          const other = fetchType.type === 'characters' ? 'locations' : 'characters';
          setFetchType({ type: other, page: 1 });
        }}
      >
        dik
      </button>
      <button onClick={() => setFetchType({ type: fetchType.type, page: fetchType.page - 1 })}>prev</button>
      <button onClick={() => setFetchType({ type: fetchType.type, page: fetchType.page + 1 })}>next</button>
      <div>{fetchType.type}</div>
      {data != null ? <div>
                {
                   <Display data = {data}></Display>
                }
            </div> : 'wtf'}
    
    </div>
  );
}

export default App;
