import React from 'react';
import './App.css';
import Pinwheel from './components/Pinwheel';
import styled from 'styled-components'

function App() {
  const AppMain = styled.main`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    place-items: center;
  `
  return (
    <AppMain> 
      <Pinwheel windSpeed={1}/>
    </AppMain>
  );
}

export default App;
