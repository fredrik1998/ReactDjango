import React from 'react'
import styled from 'styled-components'
import ConfettiAnimation from '../components/ConfettiAnimation';
import Header from '../components/Header'

const SuccessContainer = styled.div`
background-color:#1a1a1a;
`
const SuccessScreen = () => {
  return (
    <SuccessContainer>
        <Header/>
        <ConfettiAnimation/>
    <h1 style={{color:'#FFF', textAlign: 'center'}}>Thanks for the order!</h1>
    </SuccessContainer>
  )
}

export default SuccessScreen