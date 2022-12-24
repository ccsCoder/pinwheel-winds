import React, { useEffect, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// calculates the timing of the animation w.r.t tangential speed.
const computeRotationTiming = (windSpeed: number, width: number): number => {
  // console.log('##wheelRef =', wheelRef)
  if (windSpeed === 0) return Number.POSITIVE_INFINITY
  // tangential velocity timing function is 2 Pi R/ windSpeed
  return (2 * Math.PI * width) / windSpeed
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
      console.log('Animation Speed = ', animationSpeed)
      current.style.animationDuration = `${animationSpeed / 1000.0}s`;
      return () => {
        current.style.animationDuration = `${Number.POSITIVE_INFINITY}s`;
      }
    }, [])
    return <WheelImg ref={wheelRef} src={require("./pinwheel.png")} alt="A pinwheel that moves according to local wind conditions" />  
}
 
export default Pinwheel;
