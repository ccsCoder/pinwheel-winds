import React, { useEffect, useState } from 'react';
import './App.css';
import Pinwheel from './components/Pinwheel';
import styled from 'styled-components'
import getWindSpeed, { WeatherResponse } from './WeatherService';

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
  const [currWindSpeed, setCurrWindSpeed] = useState(0)
  useEffect(() => {
    // request browser location here...
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    const success = async (pos: GeolocationPosition) => {
      const crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      // find the weather details now...
      
      const windDetails: WeatherResponse = await getWindSpeed(crd);
      setCurrWindSpeed(windDetails.windSpeed)
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
        <Pinwheel windSpeed={currWindSpeed} />
      </AppMain>
    </>
    
  );
}

export default App;
