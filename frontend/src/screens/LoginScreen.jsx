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
    <Layout>
    <Header/>
    <FormContainer>
    <h1>Sign in</h1>
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

        <Button type='submit' variant='primary'>
            Sign In
        </Button>
    </Form>    
    <Row className='py-3'>
        <Col>
        New customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>

    </Row>
    </FormContainer>
    </Layout>  
  )
}

export default LoginScreen