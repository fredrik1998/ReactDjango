import React,{useState, useEffect} from 'react'
import { Link, redirect, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Form, Button, FormGroup, Col} from 'react-bootstrap'
import { savePaymentMethod } from '../actions/cartActions';
import Header from '../components/Header';
import Layout from '../components/layout';
import FormContainer from '../components/FormContainer';
import styled from 'styled-components';
import CheckoutSteps from '../components/CheckoutSteps';

const ProceedButton = styled(Button)`
  width: 100%;
  color: #000;
  background-color: #52ffa8;
  box-shadow: 5px #000;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
`


const PaymentScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    if(!shippingAddress.address){
        navigate('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

  return (
    <div className='wrapper-login'>
    <Layout>
    <Header/>
    <FormContainer>
        <CheckoutSteps step1 step2 step3/>
        <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
            <Form.Check
            type='radio'
            label='Paypal or Credit Card'
            id='paypal'
            name='paymentMethod'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check>
            </Col>
        </Form.Group>
        <ProceedButton type='submit' variant='primary'>Proceed</ProceedButton>
        </Form>

    </FormContainer>
    </Layout>
    </div>
  )
}

export default PaymentScreen