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
    <Layout>
    <Header/>
    <FormContainer>
    <h1>Sign in</h1>
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
        <Button type='submit' variant='primary'>
            Sign up
        </Button>
        <Row className='py-3'>
        <Col>
        Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign in</Link>
        </Col>

    </Row>   

    </Form>
    </FormContainer>
    </Layout>
  )
}

export default RegisterScreen