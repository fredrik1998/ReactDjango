import React,{useState, useEffect} from 'react'
import { Link, redirect, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {Form, Row, Col, Button, FormGroup, Table,} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../components/Loader'
import Message from '../components/message'
import {profile, update } from '../actions/userActions'
import Header from '../components/Header';
import Layout from '../components/layout';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import styled from 'styled-components';
import { listMyOrders } from '../actions/orderActions';
const StyledDiv = styled.div`
background-color: #202020;
color: #FFF;
`

const StyledH2 = styled.h2`
color: #fff;
margin-top: 20px;
@media only screen and (max-width: 767px) {
  margin-left: 20px;
}
`
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
margin-top: 40px;
@media only screen and (max-width: 767px) {
  width: 45%;
 
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

    const orderList = useSelector(state => state.orderList)
    const {loading: loadingOrders, error: errorOrders, orders} = orderList


    useEffect(() => {
        if (!user) {
            setSuccessMessage('User updated successfully!');
            navigate('/login');
        } else {
            if (!user || user.name || success) {
                dispatch(listMyOrders())
            
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
            dispatch(listMyOrders());
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

        <Col md={{ span: 6, offset: 2 }}>
            <StyledH2>My Orders</StyledH2>
            {loadingOrders ? (
              <Loader/>
            ) : errorOrders ?  ( 
              <Message variant='danger'>{errorOrders}</Message>
            ): (
              <Table striped responsive className='table-sm'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Delivered</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                                        <tr key={order.id}>
                                            <td className='tablecell'>{order.id}</td>
                                            <td className='tablecell'>{order.createdAt.substring(0, 10)}</td>
                                            <td className='tablecell'>${order.totalPrice}</td>
                                            <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                                <i className='fas fa-check' style={{ color: 'green' }}></i>
                                            )}</td>
                                            <td>
                                                <LinkContainer to={`/order/${order.id}`}>
                                                    <Button className='btn-sm'>Details</Button>
                                                </LinkContainer>
                                            </td>
                                        </tr>
                                    ))}
                </tbody>

              </Table>
            )}
        </Col>
    </Row>
    </Layout>
    </StyledDiv>
  )
}

export default ProfileScreen