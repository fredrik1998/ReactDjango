import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        Product
        <Link to={`/product/${product.id}`}>
            <Card.Img className='card-image' src={product.image}/>
        </Link>
        <Card.Body>
        <Link to={`/product/${product.id}`}>
            <Card.Title as="div">
                <h2 className='product-name'>{product.name}</h2>
            </Card.Title>
        </Link>
        <Card.Text as="div">
            <div className='my-3'>
                
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"}></Rating>
            </div>
        </Card.Text>
        <Card.Text as="h3">
           ${product.price} 
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product