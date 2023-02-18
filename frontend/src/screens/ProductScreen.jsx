import React, { Fragment, useState, useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import { displayProductsDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/message'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
background-color: #1a1a1a;
color: #fff;
&:hover{
background-color: #1a1a1a;
color:#fff;
}`

const StyledCard = styled(Card)`
background-color: #1a1a1a;
color: #fff;
border: 1px transparent;
border-radius: 12px;
`
const StyledCol = styled(Col)`
  background-color: #1a1a1a;
  color: #fff;
`;

const StyledListGroup = styled(ListGroup)`
  .list-group-item {
    
    background-color: #1a1a1a;
    color: #fff;
  }
`;

const StyledListGroupButton = styled(ListGroup)`
  .list-group-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    color: #fff;
  }
`;


const StyledDiv = styled.div`
background-color: #1a1a1a;
display: flex;
justify-content: center;
align-items: center;
`

const StyledFormControl = styled(Form)`
display: inline-block;
width: auto;
margin-left: 10px;
.form-control{
    background-color: #1a1a1a;
    width: 100px;
}
`
const Option = styled.option`
background-color: #2a2a2a;
color: #fff;`

const StyledButton = styled(Button)`
  width: 90%;
  margin: 0 auto 50px auto;
  background: none;
  border: 4px solid;
  color: #52ffa8;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  @media only screen and (max-width: 767px) {
    width: 50%;
    margin: 0 auto 40px auto;
    font-size: 0.8rem;
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
  }
`;
const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFlexItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

function ProductScreen() {
const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
  useEffect(() =>{
    dispatch(displayProductsDetails(id))
  },[])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?quantity=${quantity}`)
  }

  return (
    <StyledDiv>
    <Layout>
    <Header/>
    <StyledLink to="/"className='btn btn-light my-3'><i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</StyledLink>
    {
        loading ?
        <Loader/>
        : error
        ? <Message variant='danger'>{error}</Message>
        :(
        <Row>
        <StyledCol md={6}>
        <Image width={"400px"} height={"400px"} src={product.image} alt={product.name} fluid/>
        </StyledCol>

        <StyledCol md={3} className="custom-background">
            <StyledListGroup color='#000' variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"}></Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                     {product.description}
                </ListGroup.Item>
            </StyledListGroup>
        </StyledCol>

        <StyledCol md={3} className="custom-background">
            <StyledCard>
                <StyledListGroup  variant='flush'>
                    
                    {product.countInStock > 0 && (
  <ListGroup.Item>
  <StyledFlexContainer>
    <StyledFlexItem>
      <div>Price:</div>
      <div>${product.price}</div>
    </StyledFlexItem>
    <StyledFlexItem>
      <div>Stock:</div>
      <div>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</div>
    </StyledFlexItem>
    <StyledFlexItem>
      <div>Quantity:</div>
      <StyledFormControl
        as="select"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {[...Array(product.countInStock).keys()].map((x) => (
          <Option key={x + 1} value={x + 1}>
            {x + 1}
          </Option>
        ))}
      </StyledFormControl>
    </StyledFlexItem>
  </StyledFlexContainer>
</ListGroup.Item>
)}

                    <StyledListGroupButton>
                        <StyledButton onClick={addToCartHandler} className='btn-block' disabled={product.countInStock == 0} type='button'><i className='fas fa-shopping-cart'></i>Add to Cart</StyledButton>
                    </StyledListGroupButton>
                </StyledListGroup>
            </StyledCard>
        </StyledCol>
    </Row>
    )}
    </Layout>
    </StyledDiv>
  )
}
export default ProductScreen
