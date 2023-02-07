import React,{useState, useEffect} from 'react'
import { Link, redirect, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Form, Button, FormGroup} from 'react-bootstrap'
import { saveShippingAddress } from '../actions/cartActions';
import Header from '../components/Header';
import Layout from '../components/layout';
import FormContainer from '../components/FormContainer';
import styled from 'styled-components';
import CheckoutSteps from '../components/CheckoutSteps';
const StyledH1 = styled.h1`
color: #fff;
`

const ProceedButton = styled(Button)`
  width: 100%;
  color: #000;
  background-color: #52ffa8;
  box-shadow: 5px #000;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
`


const StyledFormControl = styled(Form)`
.form-control{
    background-color: #1a1a1a;
    width: 100px;
    
}
`
const ShippingScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [address, setAddress] = useState(shippingAddress && shippingAddress.address ? shippingAddress.address : '')
    const [city, setCity] = useState(shippingAddress && shippingAddress.city ? shippingAddress.city : '')
    const [postalCode, setPostalCode] = useState(shippingAddress && shippingAddress.postalCode ? shippingAddress.postalCode : '')
    const [country, setCountry] = useState(shippingAddress && shippingAddress.country ? shippingAddress.country : '')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        navigate('/payment')
    }
  return (
    <div className='wrapper-login'>
    <Layout>
    <Header/>
    <FormContainer>
    <CheckoutSteps step1 step2/>
        <StyledH1>Shipping</StyledH1>
        <Form onSubmit={submitHandler}>

        <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control 
            required
            type='address'
            placeholder='Enter address'
            value={address ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control 
            required
            type='text'
            placeholder='Enter city'
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalcode'>
            <Form.Label>Postal code</Form.Label>
            <Form.Control 
            required
            type='text'
            placeholder='Enter Postalcode'
            value={postalCode ? postalCode : ''}
            onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control 
            required
            type='text'
            placeholder='Enter Country'
            value={country ? country : ''}
            onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <ProceedButton type='submit' variant='primary'>Proceed</ProceedButton>
        </Form>
    </FormContainer>
    </Layout>
    </div>
    
  )
}

export default ShippingScreen