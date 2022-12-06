import React, { useEffect, useState } from 'react';
import './App.css';
import { mainUrls } from './api/dataRoutes';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${mainUrls.characters}1`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return <div className="App">Take a look at the console! (F12)</div>;
}

export default App;
