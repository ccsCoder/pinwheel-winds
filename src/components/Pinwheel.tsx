import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// calculates the timing of the animation w.r.t tangential speed.
const computeRotationTiming = (windSpeed: number, width: number): number => {
  if (windSpeed === 0) return Number.POSITIVE_INFINITY
  // tangential velocity timing function is 2 Pi R/ windSpeed is in KM/H
  const mpsWindSpeed = (windSpeed * 1000) / 3600.0
  return (2 * Math.PI * width) / mpsWindSpeed
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const WheelImg = styled.img`
  height: 40%;
  aspect-ratio: 1;
  transform-origin: center;
  animation-name: ${rotate};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Pinwheel = ({ windSpeed = 0 }: { windSpeed : number}) => {
    const wheelRef = useRef<HTMLImageElement>(null)
    useEffect(() => {
      const current = wheelRef.current!;
      const animationSpeed = computeRotationTiming(windSpeed, current.getBoundingClientRect().width as number);
      console.log('Calculated Animation Speed = ', animationSpeed)
      current.style.animationDuration = `${animationSpeed}ms`;
      return () => {
        current.style.animationDuration = `${Number.POSITIVE_INFINITY}s`;
      }
    }, [windSpeed])
    return <WheelImg ref={wheelRef} src={require("./pinwheel.png")} alt="A pinwheel that moves according to local wind conditions" />  
}
 
export default Pinwheel;
