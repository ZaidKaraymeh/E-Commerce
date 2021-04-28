import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";

import products from "../products";
import Product from "../components/Product";
function HomeScreen() {
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col variant="dark" key={product._id} sm={12} md={8} lg={6} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomeScreen;
