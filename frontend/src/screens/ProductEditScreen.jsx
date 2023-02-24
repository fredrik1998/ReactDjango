import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Header from '../components/Header'
import Layout from '../components/layout'
import FormContainer from '../components/FormContainer'
import { listUsers, profile, update } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET} from '../constants/userConstants'
import { createProduct, displayProducts, displayProductsDetails, updateProduct  } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios'

const StyledH1 = styled.h1`
color: #fff;
`
const StyledLink = styled(Link)`
background-color: #1a1a1a;
color: #fff;
border-radius:18px;
&:hover{
 color: #fff;

}`

const StyledButton = styled(Button)`
  width: 100%;
  background: none;
  border: 4px solid;
  color: #52ffa8;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  margin-top: 30px;
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

const ProductEditScreen = () => {

    const {id} = useParams()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate

    useEffect(() => {
      if(successUpdate){
        dispatch({type: PRODUCT_UPDATE_RESET})
        navigate('/admin/products')
      } else {
        if (!product.name || product.id !== Number(id)) {
          dispatch(displayProductsDetails(id))
        } else {
          setName(product.name)
          setPrice(product.price)
          setBrand(product.brand)
          setImage(product.image)
          setCategory(product.category)
          setCountInStock(product.countInStock)
          setDescription(product.description)
        }
      }
     
    }, [dispatch, navigate, product, id, successUpdate])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
          id: id,
          name,
          price,
          brand,
          image,
          category,
          countInStock,
          description
        }))
        
    }

    const uploadImageHandler = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      formData.append('product.id', id);
      setUploading(true);
      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
    
        const { data } = await axios.post(`http://localhost:8000/api/products/upload/`, formData, config);
        setImage(data);
        setUploading(false);
    
      } catch (error) {
        console.error(error);
        setUploading(false);
      }
    };
    

    return (
        <div className='wrapper-login'>
            <Layout>
                <Header/>
                <StyledLink to="/admin/products"className='btn btn-light my-3'><i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</StyledLink>

            <FormContainer>
                <StyledH1>Edit Product</StyledH1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='brand'>
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter brand'
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formFile">

<Form.Label>Image</Form.Label>

<Form.Control

    type="file"

    onChange={uploadImageHandler}

/>

{uploading && <Loader />}

</Form.Group>

                            <Form.Group controlId='category'>
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter category'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='countInStock'>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter stock'
                                    value={countInStock}
                                    onChange={(e) => setCountInStock(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <StyledButton type='submit' variant='primary'>
                                Update
                        </StyledButton>

                        </Form>
                    )}

            </FormContainer >
            </Layout>
        </div>
  )
}

export default ProductEditScreen