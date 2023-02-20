import React, { useState, useEffect} from 'react';
import styled from 'styled-components'
import ConfettiAnimation from '../components/ConfettiAnimation';
import Header from '../components/Header'

import Stripe from 'stripe';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link, useNavigate, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Button,
  FormGroup,
  ListGroup,
  Row,
  Col,
  ListGroupItem,
  Image,
  Container,
  Card,
} from 'react-bootstrap';
import { saveShippingAddress } from '../actions/cartActions';

import Layout from '../components/layout';
import FormContainer from '../components/FormContainer';
import CheckoutForm from '../components/CheckoutForm';

import Message from '../components/message';
import Loader from '../components/Loader';
import { getOrderDetails, updateOrderToPaid} from '../actions/orderActions';

const SuccessContainer = styled.div`
background-color:#1a1a1a;
`

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
color: #fff;
  .list-group-item {
    background-color: #1a1a1a;
    color: #fff;
    
  }
`;

const StyledH2 = styled.h2`
margin-top: 3rem;
color: #fff;
@media only screen and (max-width: 767px){
  margin-left: 10px;
}`

const StyledH1 = styled.h1`
margin-top: 3rem;
color: #fff;
text-align: center;
padding: 10px;
`

const StyledCol = styled(Col)`
margin-top: 30px;`

const StyledCard = styled(Card)`
margin-top: 50px;
border: none;`

const StyledButton = styled(Button)`
width: 100%;
color: #000;
background-color: #52ffa8;
box-shadow: 5px #000;
padding: 10px;
border-radius: 10px;
margin-top: 30px;
`
const StyledImage = styled(Image)`
@media only screen and (max-width: 767px){
  width: 200px;

}
`
const SuccessScreen = () => {
  
const orderDetails = useSelector(state => state.orderDetails)
const {order, error, loading} = orderDetails

const itemsPrice = order ? order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2) : 0
return loading ?(
  <Loader/>
) : error ? (
  <Message variant='danger'>{error}</Message>
) : (
    <SuccessContainer>
        <Header/>
       
    <h1 style={{color:'#FFF', textAlign: 'center'}}>Thanks for the order!</h1>
    <StyledListGroup variant='flush'>
                <ListGroup.Item>
                <StyledH2>Shipping</StyledH2>
                  <p><strong>Name: </strong>{order.user.name}</p>
                  <p><strong>Email: </strong><a style={{color:'#FFF'}} href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                  <p>
            
                    {order.shippingAddress.address}, {order.shippingAddress.city}, {" "}
                    {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                  </p>
                 
                </ListGroup.Item>
                </StyledListGroup>
                <ListGroup.Item>
                  <StyledH2 style={{color:'#FFF', marginLeft: '20px'}}>Order Items</StyledH2>
                  {order.orderItems.length === 0 ? <Message variant='info'>
                    Order empty</Message> : (
                      <StyledListGroup variant='flush'>
                        {order.orderItems.map((item, index) =>(
                          <ListGroup.Item key={index}>
                            <Row > 
                              <Col md={1}>
                              <StyledImage src={item.image} alt={item.name} fluid rounded></StyledImage>
                              </Col>
                              <Col md={3}>
                              <StyledLink to={`/product/${item.product}`}>{item.name}</StyledLink>
                              </Col>
                              <Col md={6}>
                                {item.qty} X ${item.price} = ${(item.qty *  item.price).toFixed(2)}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </StyledListGroup>
                    )
                  }
                </ListGroup.Item>
                <ListGroup.Item>
                  <StyledCol md={4}>
              <StyledCard>
                <StyledListGroup variant='flush'>
                  <ListGroup.Item>
                    <StyledH2>Order Summary</StyledH2>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Items:</Col>
                      <Col>${itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping:</Col>
                      <Col>${order.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Price:</Col>
                      <Col>${order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  </StyledListGroup>
                  </StyledCard>
                  <Message variant='success'>Paid on {new Date(order.paidAt).toLocaleString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</Message>
                  </StyledCol>
                </ListGroup.Item>
    </SuccessContainer>
  )
}

export default SuccessScreen