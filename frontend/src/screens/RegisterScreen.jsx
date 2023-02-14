import React,{useState, useEffect} from 'react'
import { Link, redirect, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Form, Row, Col, Button, FormGroup} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/message'
import { register } from '../actions/userActions'
import Header from '../components/Header';
import Layout from '../components/layout';
import FormContainer from '../components/FormContainer';
import styled from 'styled-components';
const StyledLink = styled(Link)`
color: #fff;`

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
}`;

function RegisterScreen() {
 const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [message, setMessage] = useState();
const navigate = useNavigate()

const dispatch = useDispatch()

const submitHandler = (e) => {
    e.preventDefault();
    
    if(password != confirmPassword){
        setMessage('Password do not match')
    } else{
        dispatch(register(name, email, password));
    }
};
const redirect = location.search ? location.search.split('=')[1] : '/'


const userRegister = useSelector(state => state.userRegister)
const {error, loading, userInfo} = userRegister


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
    <h1 style={{color: '#FFF'}}>Register</h1>
    {message && <Message variant='danger'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader/>}
    <Form onSubmit={submitHandler}>

    <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control 
            required
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></Form.Control>
        </Form.Group>

    <Form.Group controlId='email'>
            <Form.Label>Email Adress</Form.Label>
            <Form.Control 
            required
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
        </Form.Group>

    <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            required
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

    <Form.Group controlId='passwordConfirm'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
            required
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>                
        <StyledButton type='submit' variant='primary'>
            Sign up
        </StyledButton>
        <Row className='py-3'>
        <Col>
        Already have an account? <StyledLink to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign in</StyledLink>
        </Col>

    </Row>   

    </Form>
    </FormContainer>
    </Layout>
    </div>
  )
}

export default RegisterScreen