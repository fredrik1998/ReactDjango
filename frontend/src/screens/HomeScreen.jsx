import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { displayProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/message";
import Header from "../components/Header";
import Filter from "../components/Filter";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    dispatch(displayProducts(searchTerm));
  }, [searchTerm, dispatch]);

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  let filteredProducts =
    searchTerm === ""
      ? products
      : products.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });

  if (selectedFilter === "lowest_price") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedFilter === "highest_price") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <Header updateSearchTerm={updateSearchTerm} />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <h1>Latest Products</h1>
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