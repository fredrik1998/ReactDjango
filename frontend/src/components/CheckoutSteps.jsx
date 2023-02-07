import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled(Nav)`
  display: flex;
  align-content: center;
  justify-content: center;
  flex
  margin-bottom: 1.5rem;
  .nav-item {
    flex: 1;
    text-align: center;
    .nav-link {
      color: #52ffa8;

      @media (max-width: 768px) { /* change font-size on smaller screens */
      font-size: 0.8rem;
    }
      &:hover {
        color: #fff;
      }
      &.disabled {
        color: rgba(255, 255, 255, 0.5);
        pointer-events: none;
      }
    }
  }
`;

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <StyledNav className="mb-4">
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/login/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Order</Nav.Link>
        )}
      </Nav.Item>
    </StyledNav>
  );
};

export default CheckoutSteps;

