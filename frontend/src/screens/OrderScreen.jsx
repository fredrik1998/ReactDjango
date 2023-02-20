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
import {createOrder} from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

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

  .list-group-item {
    background-color: #1a1a1a;
    color: #fff;
    border: px solid
    
  }
`;
const StyledImage = styled(Image)`
@media only screen and (max-width: 767px){
  width: 200px;

}
`
const OrderItemsH2 = styled.h2`
margin-left: 10px;
border-bottom: 1px solid #52ffa8;;
margin-top: 3rem;
`
const StyledH2 = styled.h2`
margin-top: 3rem;
border-bottom: 1px solid #52ffa8;;`

const StyledCol = styled(Col)`
margin-top: 30px;`

const StyledCard = styled(Card)`
margin-top: 50px;
border: none;`

const StyledButton = styled(Button)`
width: 100%;
background: none;
border: 4px solid;
color: #52ffa8;
font-weight: 700;

text-transform: uppercase;
cursor: pointer;
font-size: 13px;
position: relative;
margin-top: 30px;
&:hover:before {
  left: 80%;
}
&:hover:after {
  right: 80%;
}
&:hover {
  background: #52ffa8;
  color: #000;
}`;

const OrderScreen = () => {
  const orderCreate = useSelector(state => state.orderCreate)
  const {order, error, success} = orderCreate
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)

  cart.itemsPrice = cart.cartItems.reduce((acc, items) => acc + items.price * items.quantity, 0);
  cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10);
  cart.totalPrice = Number(cart.itemsPrice + cart.shippingPrice).toFixed(2);
  if(!cart.paymentMethod){
    navigate('/payment')
    dispatch({type: ORDER_CREATE_RESET})
  }

  useEffect(() =>{
    if(success){
      navigate(`/order/${order.id}`)
      
    }
  },[success, navigate])

  const placeOrder = () =>{
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingAddress : cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      totalPrice: cart.totalPrice
    }))
  }
  return (
    <OrderContainer>
    <Layout>
        <Header/>
        <FormContainer>
          <CheckoutSteps step2 step3 step4/>
          </FormContainer>
          <Row>
            <Col md={8}>
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
                  <OrderItemsH2 style={{color:'#FFF'}}>Order Items</OrderItemsH2>
                  {cart.cartItems.length === 0 ? <Message variant='info'>
                    You have no items in cart</Message> : (
                      <StyledListGroup variant='flush'>
                        {cart.cartItems.map((item, index) =>(
                          <ListGroup.Item key={index}>
                            <Row > 
                              <Col md={1}>
                              <StyledImage src={item.image} alt={item.name} fluid rounded></StyledImage>
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
            <StyledCol md={4}>
              <StyledCard>
                <StyledListGroup variant='flush'>
                  <ListGroup.Item>
                    <StyledH2>Order Summary</StyledH2>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Items:</Col>
                      <Col>${cart.itemsPrice.toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping:</Col>
                      <Col>${cart.shippingPrice.toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>

                
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Price:</Col>
                      <Col>${cart.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    {error && <Message variant='danger'>{error}</Message>}

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
    </Layout>
    </OrderContainer>
  )
}

export default OrderScreen