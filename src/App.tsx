import React from 'react';
import './App.css';
import Pinwheel from './components/Pinwheel';

function App() {
  return (
    <main>
      <h1> Hello React on Ipad </h1>
      <Pinwheel windSpeed={1}/>
    </main>
  );
}

export default App;
