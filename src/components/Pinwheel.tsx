import * as React from 'react';

const Pinwheel = ({ windSpeed = null }: { windSpeed : number | null}) => {
    return <>
      <img src={require("./pinwheel.png")} alt="A pinwheel that moves according to local wind conditions" />
    </>;
}
 
export default Pinwheel;
