import React, { useEffect } from 'react';
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
  useEffect(() => {
    // request browser location here...
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    const success = (pos: GeolocationPosition) => {
      const crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    const error = (err: any) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      alert('Unable to fetch your location. Please allow from Settings or the website prompt.');
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])
  return (
    <>
      <AppMain> 
        <Pinwheel windSpeed={0}/>
      </AppMain>
    </>
    
  );
}

export default App;
