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
  color: #121212;
  border: 4px solid;
  border-radius: 18px;
  background-color: hsl(178, 50%, 51%);
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
    background-color: hsl(178, 50%, 51%);
    color: #fafafa;
  }
 
`;
function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({})
    const [isDisabled, setIsDisabled] = useState(true);

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        const errors = {};

        if(!email){
          errors.email = 'Email is required'
        }

        if(!password){
          errors.password = 'Password is required'
        }

        setFormErrors(errors);
        if(Object.keys(errors).length === 0){
          dispatch(login(email, password));
        }
    };
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(()=> {
        if(userInfo){
            navigate(redirect)
        }

    },[navigate, userInfo, redirect])

    useEffect(() => {
      setIsDisabled(Object.keys(formErrors).length > 0)
    }, [formErrors])

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
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
            type='email'
            placeholder='Enter email'
            value={email}
            isInvalid = {!!formErrors.email}
            onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type='invalid'>{formErrors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='password'
            placeholder='Enter password'
            value={password}
            isInvalid={!!formErrors.password}
            onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type='invalid'>{formErrors.password}</Form.Control.Feedback>
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