import React, { Children } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
background-color: #1a1a1a;
color: #fff;
border: 1px transparent;
border-radius: 12px;
`
function FormContainer({children}) {
  return (
    <StyledContainer>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
            {children}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default FormContainer