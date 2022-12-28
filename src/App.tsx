import React, { useEffect, useState } from 'react';
import './App.css';
import Pinwheel from './components/Pinwheel';
import styled from 'styled-components'
import getWindSpeed, { WeatherResponse } from './WeatherService';
import FullPageStatus from './components/FullPageStatus';

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
  const [weatherDetails, setWeatherDetails] = useState((): WeatherResponse => {
    return {
      location: 'Unknown',
      windDegree: 0,
      windSpeed: 0,
      windDirection: 'Unknown',
    }
  });
  useEffect(() => {
    // request browser location here...
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    const success = async (pos: GeolocationPosition) => {
      const crd = pos.coords;
      console.log(`Latitude : ${crd.latitude}, Longitude: ${crd.longitude}, ${crd.accuracy}`);
      // find the weather details now...
      const windDetails: WeatherResponse = await getWindSpeed(crd);
      setWeatherDetails(windDetails);
    }
    
    const error = (err: any) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      alert('Unable to fetch your location. Please allow from Settings or the website prompt.');
    }
    console.log('App.tsx, useEffect: Guessing device location...');
    // try to guess location of the device
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])
  return (
    <AppMain>
      {weatherDetails.location === 'Unknown' && <FullPageStatus statusText='Please wait, getting location & weater data...' /> }
      {weatherDetails.location !== 'Unknown' && <FullPageStatus statusText={`${weatherDetails.location}, Wind speed = ${weatherDetails.windSpeed} km/h`}/> }
      <Pinwheel windSpeed={weatherDetails.windSpeed} />
    </AppMain>
  );
}

export default App;
