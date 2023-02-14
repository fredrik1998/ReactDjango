import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import styled from 'styled-components';
import Message from '../components/message';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';


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
color: #fff;`

const StyledH1 = styled.h1`
margin-top: 3rem;
color: #fff;
padding: 10px;
`

const StyledCol = styled(Col)`

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

const OrderConformationScreen = () => {
  const { orderId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)
  const orderDetails = useSelector(state => state.orderDetails)
  const {order, error, loading} = orderDetails

  useEffect(() =>{
    dispatch(getOrderDetails(orderId))
  },[orderId, dispatch])

  const itemsPrice = order ? order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2) : 0
  const shippingPrice = order && itemsPrice > 100 ? 0 : 10
  const totalPrice = order ? (Number(itemsPrice) + Number(shippingPrice)).toFixed(2) : 0

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
                    <Message variant='success'>Paid on {order.paidAt}</Message>
                  ) : (
                    <Message variant='warning'>Not Paid</Message>
                  )}
                </ListGroup.Item>
              </StyledListGroup>
              <ListGroup.Item>
                  <StyledH2 style={{color:'#FFF'}}>Order Items</StyledH2>
                  {order.orderItems.length === 0 ? <Message variant='info'>
                    Order empty</Message> : (
                      <StyledListGroup variant='flush'>
                        {order.orderItems.map((item, index) =>(
                          <ListGroup.Item key={index}>
                            <Row > 
                              <Col md={1}>
                              <Image src={item.image} alt={item.name} fluid rounded></Image>
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
                      <Col>${order.itemsPrice}</Col>
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