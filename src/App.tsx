import React from 'react';
import './App.css';
import Pinwheel from './components/Pinwheel';
import styled from 'styled-components'

const AppMain = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  place-items: center center;

`

const App = () => {
  return (
    <>
      <AppMain> 
        <Pinwheel windSpeed={1}/>
      </AppMain>
    </>
    
  );
}

export default App;
