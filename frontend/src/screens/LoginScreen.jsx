import React,{useState, useEffect} from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Form, Row, Col, Button, FormGroup} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/message'
import { login } from '../actions/userActions'
import Header from '../components/Header';
import Layout from '../components/layout';
import FormContainer from '../components/FormContainer';
import styled from 'styled-components';

const StyledH1 = styled.h1`
color: #fff;
`
const StyledLink = styled(Link)`
color: #fff;
&:hover{
color: #fff;
}
`

const StyledButton = styled(Button)`
  width: 100%;
  background: none;
  border: 4px solid;
  color: #52ffa8;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  margin-top: 30px;
  @media only screen and (max-width: 767px) {
    width: 75%;
    margin: 0 auto 30px auto;
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
function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(()=> {
        if(userInfo){
            navigate(redirect)
        }

    },[navigate, userInfo, redirect])

  return (
    <div className='wrapper-login'>
    <Layout>
    <Header/>
    <FormContainer>
    <StyledH1>Sign in</StyledH1>
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader/>}
    <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>Email Adress</Form.Label>
            <Form.Control 
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <StyledButton type='submit' variant='primary'>
            Sign In
        </StyledButton>
    </Form>    
    <Row className='py-3'>
        <Col>
        New customer? <StyledLink to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</StyledLink>
        </Col>

    </Row>
    </FormContainer>
    </Layout>  
    </div>
  )
}

export default LoginScreen