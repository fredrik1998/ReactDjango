import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/message';
import Header from '../components/Header';
import Layout from '../components/layout';
import styled from 'styled-components'
import { Button, Table, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { displayProducts } from '../actions/productActions';
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
const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const productList = useSelector((state => state.productList));
  const { loading, error, product} = productList;

  const userLogin = useSelector((state => state.userLogin))
  const {userInfo} = userLogin;

 
  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(displayProducts());
    } 
  
  }, [dispatch, navigate, userInfo]);

  const deleteHandler = (id) => {
    console.log('Delete products')
    }
  }

  const createProductHandler = (product) => {
    console.log('create product')
  }

  return(
    <UsersContainer>
    <Layout>
        <Header/>
        <Row className='align-items-center'>
            <Col>
            <StyledH1>Products</StyledH1>
            </Col>
            <Col className='text-right'>
            <StyledButton onClick={createProductHandler}>
               <i className='fas fa-plus'></i>Create Product 
            </StyledButton>
            </Col>
        </Row>
        {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
    <Table striped responsive bordered hover className="table-sm">
  <thead>
    <tr>
      <th className='tablecell'>ID</th>
      <th className='tablecell'>Name</th>
      <th className='tablecell'>Price</th>
      <th className='tablecell'>Category</th>
      <th className='tablecell'>Brand</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td className='tablecell'>{product.id}</td>
        <td className='tablecell'>{product.name}</td>
        <td className='tablecell'>${product.price}</td>
        <td className='tablecell'>{product.category}</td>
        <td className='tablecell'>{product.brand}</td>  

        <td>
          <div className="d-flex align-items-center">
            <LinkContainer to={`/admin/product/${product.id}/edit`}>
              <StyledButton variant="light" className="btn-sm">
                <i className="fas fa-edit"></i>
              </StyledButton>
            </LinkContainer>
            <StyledButton
              onClick={() => deleteHandler(product.id)}
              variant="danger"
              className="btn-sm ml-2 d-none d-md-block"
            >
              <i className="fas fa-trash"></i>
            </StyledButton>
            <StyledButton
              onClick={() => deleteHandler(product.id)}
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
}


export default ProductListScreen;
