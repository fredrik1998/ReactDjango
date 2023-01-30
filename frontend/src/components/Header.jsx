import React, { useEffect, useState,} from 'react'
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/darts.svg'
import Image from 'react-bootstrap/Image'

function Header() {
  const cart = useSelector(state => state.cart)
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    const totalItems = cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(totalItems);
  }, [cart.cartItems]);
  
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
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span>
        <i class="fa-solid fa-bars"></i>
    </span>
        </Navbar.Toggle>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to='/cart'>
            <Nav.Link><i className='fas fa-shopping-cart'></i>{cartItemCount > 0 ? <span className='cart-count'>{cartItemCount}</span> : null}
</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>   
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header