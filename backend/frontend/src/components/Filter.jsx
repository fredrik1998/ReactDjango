import React, {useState} from 'react';
import {NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledNavDropdown = styled(NavDropdown)`
color: #fff
`;
export const FilterByRating = ({setSelectedFilter}) => {
  const [selectedFilter, setSelectedFilterValue] = useState("");
  return (
  <StyledNavDropdown title='Rating'>
  <NavDropdown.Item
  onClick={() => {
  setSelectedFilter("lowest_rating");
  setSelectedFilterValue("lowest_rating");
  }}
  disabled={selectedFilter === "lowest_rating"}
  >
  Lowest Rating
  </NavDropdown.Item>
  <NavDropdown.Item
  onClick={() => {
  setSelectedFilter("highest_rating");
  setSelectedFilterValue("highest_rating");
  }}
  disabled={selectedFilter === "highest_rating"}
  >
  Highest Rating
  </NavDropdown.Item>
  </StyledNavDropdown>
  );
  };

  export const FilterByPrice = ({setSelectedFilter}) => {
    const [selectedFilter, setSelectedFilterValue] = useState("");
    return (
    <StyledNavDropdown title='Price'>
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


  export const FilterByBrand = ({setSelectedFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    return (
      <StyledNavDropdown title="Brand">
          <NavDropdown.Item
            onClick={() => {
              setSelectedFilter("Sony");
              setSelectedCategory("Sony");
            }}
            disabled={selectedCategory === "Sony"}
          >
            Sony
          </NavDropdown.Item>
          <NavDropdown.Item
           
            onClick={() => {
              setSelectedFilter("Apple");
              setSelectedCategory("Apple");
            }}
            disabled={selectedCategory === "Apple"}
          >
            Apple
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => {
              setSelectedFilter("Logitech");
              setSelectedCategory("Logitech");
            }}
            disabled={selectedCategory === "Logitech"}
          >
            Logitech
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => {
              setSelectedFilter("Amazon");
              setSelectedCategory("Amazon");
            }}
            disabled={selectedCategory === "Amazon"}
          >
            Amazon
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => {
              setSelectedFilter("Canon");
              setSelectedCategory("Canon");
            }}
            disabled={selectedCategory === "Canon"}
          >
            Canon
          </NavDropdown.Item>
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
  

  

  
  






