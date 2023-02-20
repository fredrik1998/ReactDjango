import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import Product from "../components/Product";
import { displayProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/message";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import { FilterByPrice, FilterByCategory, FilterByBrand, FilterByRating} from "../components/Filter";
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
  const [isFirstVisit, setIsFirstVisit] = useState(true);
 
  useEffect(() => {
    dispatch(displayProducts(searchTerm));
  }, [searchTerm, dispatch]);

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const filterByBrand = (products, brand) => {
    return products.filter(product => product.brand === brand);
  };

  const filterByCategory = (products, category) => {
    return products.filter(product => product.category === category);
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
        case "Winmau":
          filteredProducts = filterByBrand(filteredProducts, selectedFilter);
          break;
        case "Unicorn":
          filteredProducts = filterByBrand(filteredProducts, selectedFilter);
          break;
        case "Darts":
          filteredProducts = filterByCategory(filteredProducts, selectedFilter);
          break;
        case "Dartboard":
          filteredProducts = filterByCategory(filteredProducts, selectedFilter);
          break;
        default:
          break;
      }

return (
  <div>
    <Header updateSearchTerm={updateSearchTerm} />
    {searchTerm.length === 0 && (
        <>
          <h4 style={{ color: "#FFF" }}>Filters</h4>
          <StyledDiv>
            <FilterByPrice
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
            <FilterByCategory
              products={filteredProducts}
              setSelectedFilter={setSelectedFilter}
            />
            <FilterByBrand
              products={filteredProducts}
              setSelectedFilter={setSelectedFilter}
            />
            <FilterByRating
            selectedFilter={selectedFilter}
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