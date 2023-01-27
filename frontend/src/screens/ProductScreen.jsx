import React, { Fragment } from 'react'
import products from '../products'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout'

function ProductScreen() {
  const { id } = useParams()
  const product = products.find((p) => p.id == id)
  return (
    <Layout>
    <Fragment>
    <Header/>
    <Link to="/"className='btn btn-light my-3'><i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</Link>
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
                    <ListGroup.Item>
                        <Button className='btn-block' disabled={product.countInStock == 0} type='button'>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </Fragment>
    </Layout>
  )
}

 
 

export default ProductScreen
