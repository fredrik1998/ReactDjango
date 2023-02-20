import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/message';
import Header from '../components/Header';
import Layout from '../components/layout';
import styled from 'styled-components'
import { Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../actions/userActions';
const UsersContainer = styled.div`
background-color:#1a1a1a;
`
const StyledH1 = styled.h1`
display: flex;
justify-content: center;
text-align: center;
color: #FFF;`

const StyledButton = styled(Button)`
border-radius: 18px;
`
const UserListScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state => state.userLogin))
  const {userInfo} = userLogin;

  const userDelete = useSelector((state => state.userDelete));
  const {success: successDelete} = userDelete;

  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(listUsers());
    } else {
      navigate('/login')
    }
  
  }, [dispatch, navigate, successDelete]);

  const deleteHandler = (id) => {
    if(window.confirm('Are you sure you want to delete this user?')){
    dispatch(deleteUser(id))
    }
  }

  return (
    <UsersContainer>
    <Layout>
        <Header/>  
        <StyledH1>Users</StyledH1>
        {loading
        ? <Loader/>
    : error
    ? <Message variant='danger'>{error}</Message>
: (
    
    <Table striped responsive bordered hover className="table-sm">
  <thead>
    <tr>
      <th className='tablecell'>ID</th>
      <th className='tablecell'>Name</th>
      <th className='tablecell'>Email</th>
      <th className='tablecell'>Admin</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td className='tablecell'>{user.id}</td>
        <td className='tablecell'>{user.name}</td>
        <td className='tablecell'>{user.email}</td>
        <td>
          {user.isAdmin ? (
            <i className="fas fa-check" style={{ color: 'green' }}></i>
          ) : (
            <i className="fas fa-x" style={{ color: 'red' }}></i>
          )}
        </td>
        <td>
          <div className="d-flex align-items-center">
            <LinkContainer to={`/admin/user/${user.id}`}>
              <StyledButton variant="light" className="btn-sm">
                <i className="fas fa-edit"></i>
              </StyledButton>
            </LinkContainer>
            <StyledButton
              onClick={() => deleteHandler(user.id)}
              variant="danger"
              className="btn-sm ml-2 d-none d-md-block"
            >
              <i className="fas fa-trash"></i>
            </StyledButton>
            <StyledButton
              onClick={() => deleteHandler(user.id)}
              variant="danger"
              className="btn-sm d-block d-md-none"
            >
              Delete
            </StyledButton>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

)}
    </Layout>
    </UsersContainer>
  );
};

export default UserListScreen;
