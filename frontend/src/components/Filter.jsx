import React, {useState} from 'react';
import {NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledNavDropdown = styled(NavDropdown)`
color: #fff`

export const FilterBySize = ({ setSelectedFilter}) => {
  
    return (
      <StyledNavDropdown title='Filter by price'>
        <NavDropdown.Item onClick={() => setSelectedFilter("lowest_price")}>
          Lowest Price
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => setSelectedFilter("highest_price")}>
          Highest Price
        </NavDropdown.Item>
        <NavDropdown.Divider />
      <NavDropdown.Item
        key="remove-filter"
        onClick={() => setSelectedFilter('')}
      >
        Remove filter
      </NavDropdown.Item>
      </StyledNavDropdown>
    );
  };

  export default function FilterByBrand({ products, setSelectedFilter }) {
    const uniqueBrands = Array.from(new Set(products.map(p => p.brand)));
    
    return (
      <StyledNavDropdown title="Filter by brand">
        {uniqueBrands.map((brand) => (
          <NavDropdown.Item
            key={brand}
            onClick={() => setSelectedFilter(brand)}
          >
            {brand}
          </NavDropdown.Item>
        ))}
          <NavDropdown.Divider />
      <NavDropdown.Item
        key="remove-filter"
        onClick={() => setSelectedFilter('')}
      >
        Remove filter
      </NavDropdown.Item>
      </StyledNavDropdown>
    );
  }
  
  export const FilterByCategory = ({products, setSelectedFilter}) => {
    const categories = Array.from(new Set(products.map(p => p.category)));
    
    return(
      <StyledNavDropdown title="Filter by category">
        {categories.map((category) => (
          <NavDropdown.Item
            key={category}
            onClick={() => setSelectedFilter(category)}
          >
            {category}
          </NavDropdown.Item>
        ))}
          <NavDropdown.Divider />
      <NavDropdown.Item
        key="remove-filter"
        onClick={() => setSelectedFilter('')}
      >
        Remove filter
      </NavDropdown.Item>
      </StyledNavDropdown>
    );
  }
  

  
  






