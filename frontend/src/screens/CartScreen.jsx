import React, {Fragment, useEffect} from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Card, Button, ListGroupItem} from 'react-bootstrap'
import Message from '../components/message'
import Loader from '../components/Loader'
import { addToCart, removeFromCart} from '../actions/cartActions'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function CartScreen() {
    const {id} = useParams()
    const quantity = Location.search ? Number(Location.search.split('=')[1]) : 1

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
    <Fragment>
    <Header/>
    <Link to="/"className='btn btn-light my-3'><i class="fa fa-arrow-left" aria-hidden="true"></i>Continue Shopping</Link>
    <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div>
                <Message variant='info'>Your cart is empty</Message>
                <Link to='/'>Go Back</Link>
                </div>
            ): (
                <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded></Image>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>
                                ${item.price}   
                                </Col>
                                <Col md={3}>
                                <Form.Control
                                as="select"
                                value={item.quantity}
                                onChange={(e) =>dispatch(addToCart(item.product, Number(e.target.value)))}
                                >
                                    {
                                     [...Array(item.countInStock).keys()].map((x) =>(
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                     ))
                                    }
                                </Form.Control>
                                </Col>
                                <Col md={1}>
                                    <Button 
                                    type='button'
                                    variant='light'
                                    onClick={() => removeFromCartHandler(item.product)}
                                    ><i className='fas fa-trash'></i></Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Subtotal({cartItems.reduce((acc, item)=>acc + item.quantity, 0)}) items</h2>
                        <h3>$({cartItems.reduce((acc, item)=>acc + item.quantity * item.price, 0).toFixed(2)}) </h3>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup.Item>
                    <Button
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length == 0}
                    onClick={checkoutHandler}>Proceed To Checkout</Button>
                </ListGroup.Item>
            </Card>
        </Col>
    </Row>
    </Fragment>
  )
}

export default CartScreen
