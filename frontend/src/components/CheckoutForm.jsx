import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement, } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateOrderToPaid } from '../actions/orderActions';
import Message from './Message';
import { Form, Button } from 'react-bootstrap';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const StyledLabel = styled(Form.Label)`
  font-size: 16px;
  margin-bottom: 10px;
`;

const StyledCardElement = styled(CardElement)`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
`;

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
  @media only screen and (max-width: 767px) {
    width: 75%;
    margin: 0 auto 40px auto;
  }
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background: #52ffa8;
    color: #000;
  }
`;

const CheckoutForm = ({ orderId, totalPrice }) => {
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      try {
        const { data } = await axios.post(
          'http://localhost:8000/api/payments/create-payment/',
          {
            orderId,
            totalPrice,
            paymentMethodId: paymentMethod.id,
          },
        );
        dispatch(updateOrderToPaid(orderId));
        setSucceeded(true);
        setTimeout(() => {
          navigate(`/success/${orderId}`);
        }, 2000);
      } catch (error) {
        setError(error.response.data.message);
      }

      setProcessing(false);
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : null);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Payment</h3>
      <StyledLabel>Card Details</StyledLabel>
      <StyledCardElement onChange={handleChange} />
      {error && <Message variant='danger'>{error}</Message>}
      <StyledButton
        type='submit'
        variant='primary'
        disabled={processing || disabled || succeeded}
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </StyledButton>
      {succeeded && (
        <Message variant='success'>Payment succeeded!</Message>
      )}
    </StyledForm>
 
  );
};

export default CheckoutForm;
