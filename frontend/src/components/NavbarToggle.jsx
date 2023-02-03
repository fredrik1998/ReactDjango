import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const StyledNavbarToggle = styled(Navbar.Toggle)`
  border: none;
  outline: none;

  &:focus {
    outline: none;
  }


  span {
    color: #fafafafa;
    font-size: 1.5rem;

  }

  i {
    color: white;
  }
`

const NavbarToggle = () => (
  <StyledNavbarToggle aria-controls="basic-navbar-nav">
    <span>
      <i class="fa-solid fa-bars"></i>
    </span>
  </StyledNavbarToggle>
)

export default NavbarToggle
