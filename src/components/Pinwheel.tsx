import React, { RefObject, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// calculates the timing of the animation w.r.t tangential speed.
const computeRotationTiming = (windSpeed: number, wheelRef: RefObject<HTMLImageElement>): number => {
  if (windSpeed === 0) return Number.POSITIVE_INFINITY
  if (wheelRef.current === null) return Number.POSITIVE_INFINITY
  // we have finite wind speed otherwise
  const radius = wheelRef.current.getBoundingClientRect().height
  // tangential velocity timing function is 2 Pi R/ windSpeed
  return (2 * Math.PI * radius) / windSpeed
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const WheelImg = styled.img.attrs((props: {windSpeed: number, ref: RefObject<HTMLImageElement>}) => props)`
  height: 40%;
  aspect-ratio: 1;
  transform-origin: center;
  animation: ${rotate} ${props => computeRotationTiming(props.windSpeed, props.ref)}s linear infinite;
`


const Pinwheel = ({ windSpeed = 0 }: { windSpeed : number}) => {
    const wheelRef = useRef<HTMLImageElement>(null)
    
    return <>
      <WheelImg ref={wheelRef} windSpeed={windSpeed} src={require("./pinwheel.png")} alt="A pinwheel that moves according to local wind conditions" />
    </>;
}
 
export default Pinwheel;
