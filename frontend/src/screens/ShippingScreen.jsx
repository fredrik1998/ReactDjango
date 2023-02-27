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
background: none;
background-color: #45c1bc;
color: #121212;
border-radius: 18px;
font-weight: 700;
text-transform: uppercase;
cursor: pointer;
font-size: 13px;
margin-top: 40px;
&:hover:before {
  left: 80%;
}
&:hover:after {
  right: 80%;
}
&:hover {
  background: #45c1bc;
  color: #fafafa;
  scale: 1.02;
 
}`;

const StyledFormControl = styled(Form)`
width: 100%;
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
    const [formErrors, setFormErrors] = useState({})
    const [isDisabled, setIsDisabled] = useState(true)

    const submitHandler = (e) => {
      e.preventDefault();
    
      const errors = {};
    
      if(!address){
        errors.address = 'Address is required'
      }
      if(!city){
        errors.city = 'City is required'
      }
    
      if(!postalCode){
        errors.postalCode = 'Postal code is required'
      }
    
      if(!country){
        errors.country = 'Country is required'
      }
    
      setFormErrors(errors);
    
      if (Object.keys(errors).length === 0) {
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        navigate('/payment')
      }
    }

    useEffect(() => {
      setIsDisabled(Object.keys(formErrors).length > 0);
    }, [formErrors]);
    
    
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
            type='address'
            placeholder='Enter address'
            value={address ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
            isInvalid = {!!formErrors.address}
            ></Form.Control>
            <Form.Control.Feedback type='invalid'>{formErrors.address}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control 
            type='text'
            placeholder='Enter city'
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
            isInvalid={!!formErrors.city}
            ></Form.Control>
            <Form.Control.Feedback type='invalid'>{formErrors.city}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='postalCode'>
            <Form.Label>Postal code</Form.Label>
            <Form.Control 
            type='text'
            placeholder='Enter Postalcode'
            value={postalCode ? postalCode : ''}
            onChange={(e) => setPostalCode(e.target.value)}
            isInvalid={!!formErrors.postalCode}
            ></Form.Control>
            <Form.Control.Feedback type='invalid'>{formErrors.postalCode}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control 
            type='text'
            placeholder='Enter Country'
            value={country ? country : ''}
            onChange={(e) => setCountry(e.target.value)}
            isInvalid = {!!formErrors.country}
            ></Form.Control>
            <Form.Control.Feedback type='invalid'>{formErrors.country}</Form.Control.Feedback>
        </Form.Group>

        <ProceedButton type='submit' variant='primary'>Proceed</ProceedButton>
        </Form>
    </FormContainer>
    </Layout>
    </div>
    
  )
}

export default ShippingScreen