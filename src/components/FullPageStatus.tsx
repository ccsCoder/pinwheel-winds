import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export interface FullPageStatusProps {
  statusText: string,
  duration?: number,
}

const Appear = keyframes`
  from {
    color: transparent;
  }
  to {
    color: #272727;
  }
`

const StatusDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  overflow: hidden;
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  place-items: start center;

  > h1 {
    font-size: 3rem;
    animation: ${Appear} forwards 1s ease-out;
  }
`

const FullPageStatus = (props: FullPageStatusProps) => {
  const { statusText, duration = 500 } = props;

  return (
    <StatusDiv><h1 role="status">{statusText}</h1></StatusDiv>
  )
}

export default FullPageStatus
