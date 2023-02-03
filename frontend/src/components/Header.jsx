import React, { useEffect, useState,} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/darts.svg'
import Image from 'react-bootstrap/Image'
import {logout} from '../actions/userActions';
import NavbarToggle from './NavbarToggle';
import styled from 'styled-components';
import {ShoppingCart} from '@styled-icons/typicons/ShoppingCart'

const StyledFormControl = styled(Form.Control)`
 border-radius: 18px;
`
const StyledShoppingCart = styled(ShoppingCart)`
color: #fff`

const Header = ({ updateSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const cart = useSelector(state => state.cart)
  const [cartItemCount, setCartItemCount] = useState(0)
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    const totalItems = cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(totalItems);
  }, [cart.cartItems]);

  const logOutHandler = () => {
    dispatch(logout())
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    updateSearchTerm(event.target.value);
  };
  
  return (
    <Navbar variant='dark' className='navbar' expand="lg" sticky='top' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>
          <Image
          src={logo}
          style={{color: '#fff'}}
          width="30"
          fluid={true}
          height="30"
          className="d-inline-block align-top"
          id='image'
          alt="Darts logo"
          />DartShop</Navbar.Brand>
        </LinkContainer>
        <NavbarToggle/>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to='/cart'>
            <Nav.Link><i className='fas fa-shopping-cart'></i>{cartItemCount > 0 ? <span className='cart-count'>{cartItemCount}</span> : null}
</Nav.Link>
            </LinkContainer>
           
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logOutHandler}>
                    Logout
                  </NavDropdown.Item>
              </NavDropdown>
            ): (
              <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>   
            </LinkContainer>
            )}
             <Form>
        <Form.Group>
      <StyledFormControl
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      </Form.Group>
    </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header