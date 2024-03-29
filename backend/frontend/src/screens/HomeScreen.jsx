import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import Product from "../components/Product";
import { displayProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/message";
import Header from "../components/Header";
import { FilterByPrice, FilterByRating, FilterByBrand} from "../components/Filter";
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
`
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
 
  useEffect(() => {
    dispatch(displayProducts(searchTerm));
  }, [searchTerm, dispatch]);
  
  
  useEffect(() => {
    setSearchResults(getSearchResults());
  }, [products]);
  

  const getSearchResults = () => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  
  const searchMessage = searchTerm.length > 0 && searchResults.length > 0 ? `Found ${searchResults.length} results for "${searchTerm}"` : null;
  

const filterByBrand = (products, brand) => {
  return products.filter(product => product.brand === brand);
};


  let filteredProducts =
  searchTerm === ""
    ? products
    : products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      switch (selectedFilter) {
        case "lowest_price":
          filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "highest_price":
          filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "lowest_rating":
          filteredProducts = filteredProducts.sort((a, b) => a.rating - b.rating); 
          break;
        case "highest_rating":
          filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
        case "Apple":
          filteredProducts = filterByBrand(products, "Apple");
          break
        case "Logitech":
          filteredProducts = filterByBrand(products, "Logitech");
          break
        case "Sony":
          filteredProducts = filterByBrand(products, "Sony");
          break
        case "Canon":
          filteredProducts = filterByBrand(products, "Canon");
          break
        case "Amazon":
          filteredProducts = filterByBrand(products, "Amazon"); 
          break    
        default:
          break;
      }

return (
  <div>
    <Header updateSearchTerm={updateSearchTerm} />
    {!loading && searchMessage && <h4 style={{color: '#fff'}}>{searchMessage}</h4>}
    {searchTerm.length === 0 && (
        <>
          <h4 style={{ color: "#FFF" }}>Filters</h4>
          <StyledDiv>
            <FilterByPrice
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
            <FilterByRating
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            />
            <FilterByBrand
              selectedBrand ={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </StyledDiv>
        </>
      )}
    <Container>
    <Row xs={2} md={4} lg={6}>
    <Col>
  
      </Col>
      </Row>
     </Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : filteredProducts.length === 0 ? (
        <Message variant="danger">No results found</Message>
      ) : ( 
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen