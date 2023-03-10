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
import { displayProducts, deleteProduct, createProduct } from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';
const UsersContainer = styled.div`
background-color:#1a1a1a;
`
const StyledH1 = styled.h1`
display: flex;
justify-content: center;
text-align: center;
color: #FFF;`

const EditButton = styled(Button)`
border-radius: 18px;

`
const DeleteButton = styled(Button)`
border-radius: 18px;
color: #fff;

`
const CreateButton = styled(Button)`
 border: 4px solid;
 color: #121212;
 background-color: hsl(178, 50%, 51%);
 border-radius: 18px;
 font-size: 13px;
 font-weight: 700;
 &:hover{
  background-color: hsl(178, 50%, 51%);
  color: #fafafa;
 }

`
const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const productList = useSelector((state => state.productList));
  const { loading, error, products } = productList;

  const productDelete = useSelector((state => state.productDelete));
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;

  const productCreate = useSelector((state => state.productCreate));
  const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct} = productCreate;

  const userLogin = useSelector((state => state.userLogin))
  const {userInfo} = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
  
    if (!userInfo.isAdmin) {
      navigate('/login');
    }
    if (successCreate) {
      dispatch(displayProducts());
      navigate(`/admin/products/${createdProduct.id}/edit`);
    } else {
      dispatch(displayProducts());
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate]);

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id))
  }

  const createProductHandler = () => {
    dispatch(createProduct())
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
            <CreateButton onClick={createProductHandler}>
               <i className='fas fa-plus'></i>Create Product 
            </CreateButton>
            </Col>
        </Row>
        {loadingDelete && <Loader/>}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

        {loadingCreate && <Loader/>}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

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
            <LinkContainer to={`/admin/products/${product.id}/edit`}>
              <EditButton  className="btn">
                <i className="fas fa-edit"></i>
              </EditButton>
            </LinkContainer>
            <DeleteButton
              onClick={() => deleteHandler(product.id)}
              
              className="btn ml-2 d-none d-md-block"
            >
              <i className="fas fa-trash"></i>
            </DeleteButton>
            <DeleteButton
              onClick={() => deleteHandler(product.id)}
              variant="danger"
              className="btn d-block d-md-none"
            >
              Delete
            </DeleteButton>
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
