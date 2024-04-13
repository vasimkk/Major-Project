import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [availability, setAvailability] = useState({});

  useEffect(() => {
    // Fetch all products when the component mounts
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      // Make a GET request to fetch all products
      const response = await axios.get('http://localhost:2006/AllProducts');
      // Set the products state with the data from the response
      setProducts(response.data);
      // Initialize availability state for each product
      const initialAvailability = {};
      response.data.forEach(product => {
        initialAvailability[product.id] = true; // Assuming all products are initially available
      });
      setAvailability(initialAvailability);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <section className="bg-light">
    <Container className="text-center">
      <h2>See What's Selling</h2>
      <Row xs={1} md={3} className="g-4">
        {/* Map over the products array and display each product as a card */}
        {products.map(product => (
          <Col key={product.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.images[0]} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body style={{ height: '200px', overflowY: 'auto' }}>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>
                  Description: {product.description}
                  <br />
                  Quantity: {product.quantity}
                  <br />
                  Price: {product.price}
                  <br />
                  Seller Name: {product.sellerName}
                  <br />
                  Seller Email: {product.sellerEmail}
                  <br />
                  Shipping Address: {product.shippingAddress}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
}

export default AllProducts;
