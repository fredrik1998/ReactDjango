import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { motion} from "framer-motion";

function Product({product}) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}>
    <Card className='my-3 p-3 rounded'>
        Dart
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
    </motion.div>
  )
}

export default Product