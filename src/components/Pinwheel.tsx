import * as React from 'react';
import styled from 'styled-components';

const WheelImg = styled.img`
  height: 300px;
  width: 300px;
`

const Pinwheel = ({ windSpeed = null }: { windSpeed : number | null}) => {
    return <>
      <WheelImg src={require("./pinwheel.png")} alt="A pinwheel that moves according to local wind conditions" />
    </>;
}
 
export default Pinwheel;
