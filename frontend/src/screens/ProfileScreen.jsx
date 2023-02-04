import React,{useState, useEffect} from 'react'
import { Link, redirect, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Form, Row, Col, Button, FormGroup} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/message'
import {profile, update } from '../actions/userActions'
import Header from '../components/Header';
import Layout from '../components/layout';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userProfile = useSelector(state => state.userProfile)
    const {error, loading, user} = userProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success} = userUpdateProfile

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            if (!user || user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(profile('profile'));
            } else {
                setName(user.name);
                setEmail(user.email);

            }
        }
    }, [user, success, navigate, dispatch, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(password != confirmPassword){
            setMessage('Password do not match')
        } else{
            dispatch(update({
                'id' :user.id,
                'name' :name,
                'email' : email,
                'password' :password
            }))
            setMessage('')
        }  
    };

  return (
    <Layout>
        <Header/>
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>

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
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

    <Form.Group controlId='passwordConfirm'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>                
        <Button type='submit' variant='primary'>
            Update
        </Button>
        <Row className='py-3'>
        <Col>
        Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign in</Link>
        </Col>

    </Row>   

    </Form>
        </Col>

        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
    </Layout>
  )
}

export default ProfileScreen