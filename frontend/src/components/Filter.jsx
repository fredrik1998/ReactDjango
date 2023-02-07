import React, {useState} from 'react';
import {NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledNavDropdown = styled(NavDropdown)`
color: #fff

`


export const FilterBySize = ({setSelectedFilter}) => {
  const [selectedFilter, setSelectedFilterValue] = useState("");
  
  return (
  <StyledNavDropdown title='Filter by price'>
  <NavDropdown.Item
  onClick={() => {
  setSelectedFilter("lowest_price");
  setSelectedFilterValue("lowest_price");
  }}
  disabled={selectedFilter === "lowest_price"}
  >
  Lowest Price
  </NavDropdown.Item>
  <NavDropdown.Item
  onClick={() => {
  setSelectedFilter("highest_price");
  setSelectedFilterValue("highest_price");
  }}
  disabled={selectedFilter === "highest_price"}
  >
  Highest Price
  </NavDropdown.Item>
  </StyledNavDropdown>
  );
  };


  export function FilterByCategory({ products, setSelectedFilter }) {
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const categories = Array.from(new Set(products.map((p) => p.category)));
  
    return (
      <StyledNavDropdown title="Filter by category">
        {categories.map((category) => (
          <NavDropdown.Item
            key={category}
            onClick={() => {
              setSelectedFilter(category);
              setSelectedCategory(category);
            }}
            disabled={selectedCategory === category}
          >
            {category}
          </NavDropdown.Item>
        ))}
        <NavDropdown.Divider />
        <NavDropdown.Item
          key="remove-filter"
          onClick={() => {
            setSelectedFilter("");
            setSelectedCategory("");
          }}
          disabled={selectedCategory === ""}
        >
          Remove filter
        </NavDropdown.Item>
      </StyledNavDropdown>
    );
  }
  

  
  






