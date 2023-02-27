import React, { useState, useEffect} from 'react';
import styled from 'styled-components'
import Header from '../components/Header'
import RatingComponent from '../components/RatingComponent';
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

const StyledImage = styled(Image)`
@media only screen and (max-width: 767px){
  width: 200px;

}
`
const SuccessScreen = () => {
  
const orderDetails = useSelector(state => state.orderDetails)
const {order, error, loading} = orderDetails

const itemsPrice = order ? order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2) : 0
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