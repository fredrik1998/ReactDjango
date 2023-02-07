import React,{useState, useEffect} from 'react'
import { Link, redirect, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Form, Button, FormGroup, ListGroup, Row, Col, ListGroupItem, Image, Container, Card} from 'react-bootstrap'
import { saveShippingAddress} from '../actions/cartActions';
import Header from '../components/Header';
import Layout from '../components/layout';
import FormContainer from '../components/FormContainer';
import styled from 'styled-components';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/message';

const StyledLink = styled(Link)`
color: #FFF;
border-radius:18px;
&:hover{
 color: #fff;
}`

const OrderContainer = styled.div`
background-color:#1a1a1a;
`
const StyledListGroup = styled(ListGroup)`
border-bottom 1px solid #FFF;
  .list-group-item {
    background-color: #1a1a1a;
    border-bottom 1px solid #FFF;
    color: #fff;
  }
`;

const StyledH2 = styled.h2`
margin-top: 3rem;`

const StyledCol = styled(Col)`
border-bottom 1px solid #FFF
margin-top: 30px;`

const StyledCard = styled(Card)`
margin-top: 50px;`

const StyledButton = styled(Button)`
width: 100%;
color: #000;
background-color: #52ffa8;
box-shadow: 5px #000;
padding: 10px;
border-radius: 10px;
margin-top: 30px;
`

const OrderScreen = () => {
  const cart = useSelector(state => state.cart)

  const placeOrder = () =>{
    console.log('Place order')
  }
  return (
    <OrderContainer>
    <Layout>
        <Header/>
        <FormContainer>
          <CheckoutSteps step2 step3 step4/>
          <Row>
            <Col md={12}>
              <StyledListGroup variant='flush'>
                <ListGroup.Item>
                  <StyledH2>Shipping</StyledH2>
                  <p>
            
                    {cart.shippingAddress.address}, {cart.shippingAddress.city}, {" "}
                    {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <StyledH2>Payment Method</StyledH2>
                  <p>
                    <strong>Method: </strong>
                    {cart.paymentMethod}
                  </p>
                </ListGroup.Item>
              </StyledListGroup>
              <ListGroup.Item>
                  <StyledH2>Order Items</StyledH2>
                  {cart.cartItems.length === 0 ? <Message variant='info'>
                    You have no items in cart</Message> : (
                      <StyledListGroup variant='flush'>
                        {cart.cartItems.map((item, index) =>(
                          <ListGroup.Item key={index}>
                            <Row > 
                              <Col md={1}>
                              <Image src={item.image} alt={item.name} fluid rounded></Image>
                              </Col>
                              <Col md={3}>
                              <StyledLink to={`/product/${item.product}`}>{item.name}</StyledLink>
                              </Col>
                              <Col md={6}>
                                {item.quantity} X ${item.price} = ${(item.quantity *  item.price).toFixed(2)}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </StyledListGroup>
                    )
                  }
                </ListGroup.Item>
            </Col>
            <StyledCol md={12}>
              <StyledCard>
                <StyledListGroup variant='flush'>
                  <ListGroup.Item>
                    <StyledH2>Order Summary</StyledH2>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Items:</Col>
                      <Col>${cart.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping:</Col>
                      <Col>${cart.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Tax:</Col>
                      <Col>${cart.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Total Price:</Col>
                      <Col>${cart.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <StyledButton 
                    type='button'
                    variant='primary'
                    className='btn-block'
                    disabled={cart.cartItems === 0}
                    onClick={placeOrder}
                    >Place Order</StyledButton>
                  </ListGroup.Item>
                </StyledListGroup>
              </StyledCard>
            </StyledCol>
          </Row>
        </FormContainer>
    </Layout>
    </OrderContainer>
  )
}

export default OrderScreen