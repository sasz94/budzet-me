import React from 'react'
import styled, { keyframes } from 'styled-components';


const flip = keyframes`

  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`

const Root = styled.div`
 display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div:nth-child(1) {
        animation-delay: -0.45s;
      }
   & div:nth-child(2) {
         animation-delay: -0.3s;
      }
   & div:nth-child(3) {
        animation-delay: -0.15s;
      }

  `

const Content = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${flip} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: red transparent transparent transparent;
 `


function LoadingIndicator() {

    setTimeout(() => {

    }, 8000);

    return (


        < Root >

            <Content />
            <Content />
            <Content />
            <Content />



        </Root >

    )
}

export default LoadingIndicator;