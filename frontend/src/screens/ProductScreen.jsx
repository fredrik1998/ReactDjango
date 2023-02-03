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
    <Layout>
    <Fragment>
    <Header/>
    <Link to="/"className='btn btn-light my-3'><i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</Link>
    {
        loading ?
        <Loader/>
        : error
        ? <Message variant='danger'>{error}</Message>
        :(
        <Row>
        <Col md={6}>
        <Image width={"400px"} height={"400px"} src={product.image} alt={product.name} fluid/>
        </Col>

        <Col md={3}>
            <ListGroup variant="flush">
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
            </ListGroup>
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item >
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <Row>
                            <Col>Stock:</Col>
                            <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Quantity</Col>
                                <Col xs='auto' className='my-1'>
                                <Form.Control
                                as="select"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                >
                                    {
                                     [...Array(product.countInStock).keys()].map((x) =>(
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                     ))
                                    }
                                </Form.Control>
                                </Col>
                            </Row>

                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Button onClick={addToCartHandler} className='btn-block' disabled={product.countInStock == 0} type='button'><i className='fas fa-shopping-cart'></i>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    )}
    
    </Fragment>
    </Layout>
  )
}

 
 

export default ProductScreen
