import React from 'react';
import {NavDropdown } from 'react-bootstrap';
const Filter = ({ setSelectedFilter }) => {
    return (
      <NavDropdown title='Filter' color='#fff'>
        <NavDropdown.Item onClick={() => setSelectedFilter("lowest_price")}>
          Lowest Price
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => setSelectedFilter("highest_price")}>
          Highest Price
        </NavDropdown.Item>
      </NavDropdown>
    );
  };
  

export default Filter;
