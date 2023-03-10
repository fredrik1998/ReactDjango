import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const StyledCard = styled(Card)`
  background-color: #202020;
  color: #fff;
  border: 1px transparent;
`;

const StyledH2 = styled.h2`
  color: #fff !important;
`;

const StyledImage = styled(Card.Img)`
  background-color: transparent;
`;



const Product = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <StyledCard className='my-3 p-3 rounded'>
        <Link to={`/product/${product.id}`}>
          <StyledImage className='card-image' src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title as='div'>
              <StyledH2 className='product-name'>{product.name}</StyledH2>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            <div className='my-3'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={'#f8e825'}
              />
            </div>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </StyledCard>
    </motion.div>
  );
};

export default Product;