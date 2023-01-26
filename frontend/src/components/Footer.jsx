import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
function Footer() {
  return (
    <div>
        <footer>Footer</footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; DartStore</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer