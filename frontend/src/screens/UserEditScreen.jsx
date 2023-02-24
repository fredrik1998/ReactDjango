import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Header from '../components/Header'
import Layout from '../components/layout'
import FormContainer from '../components/FormContainer'
import { listUsers, profile, update } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET} from '../constants/userConstants'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const StyledH1 = styled.h1`
color: #fff;
`
const StyledLink = styled(Link)`
background-color: #1a1a1a;
color: #fff;
border-radius:18px;
&:hover{
 color: #fff;

}`

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

const UserEditScreen = () => {
    const {userId} = useParams()
    console.log(userId)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userProfile = useSelector(state => state.userProfile)
    const { error, loading, user } = userProfile

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdateProfile

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET})
            navigate('/admin/userlist')
        } else {
            if (!user || !user.name || user.id !== Number(userId)) {
                dispatch(profile(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [dispatch, navigate, userId, user, successUpdate])
    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(update({ id: user.id, name, email, isAdmin }))
    }

    return (
        <div className='wrapper-login'>
            <Layout>
                <Header/>
                <StyledLink to="/admin/users"className='btn btn-light my-3'><i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</StyledLink>

            <FormContainer>
                <StyledH1>Edit User</StyledH1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control

                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='isadmin'>
                                <Form.Check
                                    type='checkbox'
                                    label='Is Admin'
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                >
                                </Form.Check>
                            </Form.Group>

                            <StyledButton type='submit' variant='primary'>
                                Update
                        </StyledButton>

                        </Form>
                    )}

            </FormContainer >
            </Layout>
        </div>

    )
}

export default UserEditScreen