import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const url =
  import.meta.env.VITE_BASE_URL +
  '/api/counter/' +
  import.meta.env.VITE_COUNTER_ID;

function App() {
  const [data, setData] = useState(0);

  const fetchData = async () => {
    const res = await fetch(url, {
      method: 'GET',
    });

    const { counter } = await res.json();
    setData(Number(counter));
  };

  const add = async () => {
    setData((val) => val + 1);
    const res = await fetch(url + '?action=add', {
      method: 'PATCH',
    });
    const { counter } = await res.json();
    setData(counter);
  };

  const sub = async () => {
    setData((val) => val - 1);
    const res = await fetch(url + '?action=sub', {
      method: 'PATCH',
    });
    const { counter } = await res.json();
    setData(counter);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Turbo</h1>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button onClick={sub}>-</button>
        <h3>{data}</h3>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}

export default App;
