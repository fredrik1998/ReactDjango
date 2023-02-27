import React, {Fragment, useEffect} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Card, Button, ListGroupItem} from 'react-bootstrap'
import Message from '../components/message'
import Loader from '../components/Loader'
import { addToCart, removeFromCart} from '../actions/cartActions'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Layout from '../components/layout'
import styled from 'styled-components'

const StyledRow = styled(Row)`
background-color: #1a1a1a;

`
const StyledDiv = styled.div`
background-color: #1a1a1a;
`
const StyledLink = styled(Link)`
background-color: #1a1a1a;
color: #fff;
border-radius:18px;
&:hover{
 color: #fff;

}`

const StyledCard = styled(Card)`
border: none;`

const StyledH2 = styled.h2`
color: #FFF;
@media only screen and (max-width: 767px){
border: none;
}`


const StyledListGroup = styled(ListGroup)`
  .list-group-item {
    background-color: #1a1a1a;
    color: #fff;
  }
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  max-width: 350px;
  background: none;
  border: 4px solid;
  background-color: #45c1bc;
  transition: all: 0.3s;
  border-radius: 18px;
  color: #121212;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 13px;
  position: relative;
  margin-top: 40px;

  &:hover:before {
    left: 80%;
  }
  &:hover:after {
    right: 80%;
  }
  &:hover {
    background-color: #45c1bc;
    scale: 1.02;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 5px;
  }
`;


const CartButton = styled(Button)`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
  background: none;
  color: #fff;
  font-weight: 700;
  &.disabled {
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
    background: transparent;
  }
  @media (max-width: 767px) {
    width: 10%;
  }
`;

const DeleteButton = styled(Button)`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: 50%;
  color: #fff;
  background: none;
  margin-bottom: 20px;
  background-color: #fff
  @media (max-width: 767px) {
    width: 10px;
  }
`
const P = styled.p`
margin-bottom: 30px;`

function CartScreen() {
    const {id} = useParams()
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log('cartItems', cartItems)

    useEffect(() =>{
        if(id){
            dispatch(addToCart(id, quantity))
        }

    }, [dispatch, id, quantity])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }

  return (
    <StyledDiv>
    <Layout>
    <Header/>
    <StyledLink to="/"className='btn btn-light my-3'><i class="fa fa-arrow-left" aria-hidden="true"></i>Continue Shopping</StyledLink>
    <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div>
                <Message variant='info'>Your cart is empty</Message>
                </div>
            ): (
                <StyledListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <StyledRow>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded></Image>
                                </Col>
                                <Col md={3}>
                                    <StyledLink to={`/product/${item.product}`}>{item.name}</StyledLink>
                                </Col>
                                <Col md={2}>
                                ${item.price}   
                                </Col>
                                <Col md={3}>
                                <div className="d-flex align-items-center">
                              
  <CartButton
    variant="light"
    onClick={() => item.quantity > 1 && dispatch(addToCart(item.product, item.quantity - 1))}
    disabled={item.quantity <= 1}
  >
    <i class="fa-solid fa-minus"></i>
  </CartButton>
  <P className="text-center mx-3" style={{marginTop: '12px'}}>{item.quantity}</P>
  <CartButton
    variant="light"
    onClick={() => item.quantity < item.countInStock && dispatch(addToCart(item.product, item.quantity + 1))}
    disabled={item.quantity >= item.countInStock}
  >
    <i class="fa-solid fa-plus"></i>
  </CartButton>
  <DeleteButton 
                                    type='button'
                                    variant='light'
                                    onClick={() => removeFromCartHandler(item.product)}
                                    ><i className='fas fa-trash'></i></DeleteButton>
  
</div>

                                </Col>
                              
                            </StyledRow>
                        </ListGroup.Item>
                    ))}
                </StyledListGroup>
            )}
        </Col>
        <Col md={4}>
            <StyledCard>
                <StyledListGroup variant='flush'>
                    <ListGroup.Item>
                        <StyledH2>Subtotal({cartItems.reduce((acc, item)=>acc + item.quantity, 0)}) items</StyledH2>
                        <h3>$({cartItems.reduce((acc, item)=>acc + item.quantity * item.price, 0).toFixed(2)}) </h3>
                    </ListGroup.Item>
                </StyledListGroup>
                <StyledListGroup>
                <ListGroup.Item>
                    <CheckoutButton
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length == 0}
                    onClick={checkoutHandler}><i class="fa-solid fa-truck-fast"></i>Proceed To Checkout</CheckoutButton>
                </ListGroup.Item>
                </StyledListGroup>
            </StyledCard>
        </Col>
    </Row>
    </Layout>
    </StyledDiv>
  )
}
export default CartScreen
