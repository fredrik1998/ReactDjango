import React, { Fragment, useState, useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem, Modal} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'
import { displayProductsDetails, createReview } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/message'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PRODUCT_CREATE_RESET, PRODUCT_REVIEW_RESET } from '../constants/productConstants'

const StyledLink = styled(Link)`
background-color: #1a1a1a;
color: #fff;
&:hover{
background-color: #1a1a1a;
color:#fff;
}`

const StyledH4 = styled.h4`
color: #fff;
margin-left: 1rem;
@media screen and (max-width: 767px;) {
  display: flex;
  justify-content: center;
  align-items: center;
}`

const StyledH5 = styled.h5`
color: #fafafa;
font-size: 1.3rem;
margin-top: 25px;
text-align: center;
`

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

const StyledImage = styled(Image)`
width: 400px;
height: 400px;
`

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
  width: 100%;
  max-width: 350px;
  background: none;
  margin: auto;
  border: 4px solid;
  transition: all .3s;
  border-radius: 18px;
  background-color: #45c1bc;
  color: #121212;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 15px;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    scale: 1.02;
    background-color: #45c1bc;
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

const StyledRow = styled(Row)`
display: flex;
justify-content: flex-start;
align-items: center;
@media screen and (max-width: 767px){
  margin-top: 10ex
}
`
const StyledForm = styled(Form)`
background-color: #121212;
color: #fff
border-radius: 18px;
.form-control{
  background-color: #2a2a2a;
  border-radius: 18px;
  color: #fafafa;
  width: 90%;
  margin: auto;
}
`

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [show, setShow] = useState(false);

  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const productReview = useSelector(state => state.productReview)
  const {loading: loadingReview, error: errorReview, success: successReview} = productReview

  useEffect(() =>{
    if(successReview){
      setRating(0)
      setComment('')
      dispatch({type: PRODUCT_REVIEW_RESET})
    }
    dispatch(displayProductsDetails(id))
  },[successReview])

  const addToCartHandler = () => {
    navigate(`/cart/${id}?quantity=${quantity}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createReview(id, {
      rating,
      comment
    }))
  }
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div>
        <Row>
        <StyledCol md={6}>
        <StyledImage src={product.image} alt={product.name} fluid/>
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
    <StyledRow>
      <Col md={4}>
        <StyledH4>Reviews</StyledH4>
        <StyledListGroup variant='flush'>
          {product.reviews.map((review) => (
            <ListGroup.Item key={review.id}>
              <strong>{review.name}</strong>
              <Rating value={review.rating} color='#f8e825'/>
              <p>{review.createdAt.substring(0,10)}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
           
            {loadingReview && <Loader/> }
            {successReview && <Message variant='success'>Review submitted</Message>}
            {errorReview && <Message variant='danger'>{errorReview}</Message>}
            {userInfo ? (
              <>
              <StyledButton variant='primary' onClick={handleShow}>
                Add review
              </StyledButton>
              <Modal centered show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter">
              <StyledForm onSubmit={submitHandler}>
                <StyledH5>Add Review</StyledH5>
                <Form.Group controlId='rating'>
                  <Form.Label style={{ color: '#fafafa', marginLeft: '20px'}}>Rating</Form.Label>
                  <Form.Control
                  as='select'
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  >
                    <option value=''>Select...</option>
                    <option value='1'>1 - Poor</option>
                    <option value='2'>2 - Fair</option>
                    <option value='3'>3 - Good</option>
                    <option value='4'>4 - Very Good</option>
                    <option value='5'>5 - Amazing</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='comment'>
                  <Form.Label style={{ color: '#fafafa', marginLeft: '20px'}}>Review</Form.Label>
                  <Form.Control
                  as='textarea'
                  row='5'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>
                <StyledListGroupButton>
                <StyledButton
                disabled={loadingReview}
                type='submit'
                onClick={handleClose}
                variant='primary'
                >Submit
                </StyledButton>
                </StyledListGroupButton>
              </StyledForm>
              </Modal>
              </>
            ) : (
              <Message variant='info'>You have to be logged in to write a review</Message>
            )}

          </ListGroup.Item>
        </StyledListGroup>
      </Col>
    </StyledRow>
    </div>
    )}
    </Layout>
    </StyledDiv>
    
  )
}
export default ProductScreen