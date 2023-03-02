import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header'
import RatingComponent from '../components/RatingComponent';
import Layout from '../components/layout';

const SuccessContainer = styled.div`
background-color:#1a1a1a;
`
const SuccessScreen = () => {
return (
    <SuccessContainer>
        <Header/>
    <Layout>
    <h1 style={{color:'#FFF', textAlign: 'center'}}>Thanks for the order!</h1>
    <RatingComponent/>
      </Layout>
    </SuccessContainer>
  )
}
export default SuccessScreen