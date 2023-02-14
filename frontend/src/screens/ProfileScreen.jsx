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
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: #202020;
color: #FFF;
`

const StyledH2 = styled.h2`
color: #fff;`

const StyledLink = styled(Link)`
color: #fff;`

const StyledCol = styled(Col)`
margin-top: 0px
`
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

const StyledForm = styled(Form)`
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      width: 100%;
    }
  }
`;
const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
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
            setSuccessMessage('User updated successfully!');
            navigate('/login');
        } else {
            if (!user || user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
            
            } else {
                setName(user.name);
                setEmail(user.email);
            }

            if (success) {
                setMessage('Updated Successfully');
                setTimeout(() => {
                  navigate('/');
                }, 2000);
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
    <StyledDiv>
    <Layout>
        <Header/>
    <Row>
    <Col md={{ span: 3, offset: 2 }}>
            <StyledH2>User Profile</StyledH2>

            {message && <Message variant='success'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader/>}
    <StyledForm onSubmit={submitHandler}>

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
        <StyledButton type='submit' variant='primary'>
            Update
        </StyledButton>
        <Row className='py-3'>
       
    </Row>   

    </StyledForm>
        </Col>

        <Col md={{ span: 5, offset: 2 }}>
            <StyledH2>My Orders</StyledH2>
        </Col>
    </Row>
    </Layout>
    </StyledDiv>
  )
}

export default ProfileScreen