import React, { useState, useEffect} from 'react';
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
import Header from '../components/Header';
import Layout from '../components/layout';
import FormContainer from '../components/FormContainer';
import CheckoutForm from '../components/CheckoutForm';
import styled from 'styled-components';
import Message from '../components/message';
import Loader from '../components/Loader';
import { getOrderDetails, updateOrderToPaid} from '../actions/orderActions';

const stripePromise = loadStripe('pk_test_51MbkNeGJ8v9b2yrMsOEfEwwuEkzRpZOrJ2A5Wkdti8WqCdwI7b0BXIFGAwX888Qpd6K8fZG07igiitpOGOEE52Ns00Aj9fGYtL');
const appearance = {
  theme: 'night'
};
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
padding: 10px;
margin-left: 10px;
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
const OrderConformationScreen = () => {
  const { orderId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)
  const orderDetails = useSelector(state => state.orderDetails)
  const {order, error, loading} = orderDetails

  const itemsPrice = order ? order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2) : 0
  const shippingPrice = order && itemsPrice > 100 ? 0 : 10
  const totalPrice = order ? (Number(itemsPrice) + Number(shippingPrice)).toFixed(2) : 0
  

useEffect(() => {
  dispatch(getOrderDetails(orderId));
}, [orderId, dispatch]);

const [clientSecret, setClientSecret] = useState('');
useEffect(() => {
  let cancelToken = axios.CancelToken.source();

  const fetchClientSecret = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:8000/api/payments/create-payment/',
        { cancelToken: cancelToken.token }
      );
      const { client_secret } = data;
      console.log(client_secret);
      setClientSecret(client_secret);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        throw error;
      }
    }
  };

  fetchClientSecret();

  return () => {
    cancelToken.cancel('Component unmounted');
  };
}, []);



const auth = useSelector((state) => state.auth);
const token = auth && auth.userInfo && auth.userInfo.token;

  return loading ?(
    <Loader/>
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <OrderContainer>
    <Layout>
        <Header/>
          <Row>
            <Col md={8}>
            <StyledH1>Order:{order.id}</StyledH1>
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
                <ListGroup.Item>
                  <StyledH2>Payment Method</StyledH2>
                  <p>
                    <strong>Method: </strong>
                    {order.paymentMethod}
                  </p>

                  {order.isPaid ? (
    <Message variant='success'>Paid on {new Date(order.paidAt).toLocaleString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</Message>
) : (
    <Message variant='warning'>Not Paid</Message>
)}

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
            </Col>
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
                  <ListGroup.Item>
                  {!order.isPaid && stripePromise && clientSecret && (
                    <Elements stripe={stripePromise} options= {{ clientSecret, appearance }}>
                    <CheckoutForm orderId={orderId} totalPrice={totalPrice}  />
                   </Elements>
                  )}
                  </ListGroup.Item>
                </StyledListGroup>
              </StyledCard>
            </StyledCol>
          </Row>
    </Layout>
    </OrderContainer>
  )
}

export default OrderConformationScreen