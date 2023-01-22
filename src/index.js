import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './components/Counter';
import Time from './components/Time';
import DigitalClock from './components/DigitalClock';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <Time />
    <DigitalClock />
  </React.StrictMode>
);

