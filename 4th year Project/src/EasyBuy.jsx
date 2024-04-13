import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:2006/Allsproduct');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleBuyClick = async (productId) => {
    // Validate user input (name and address)
    if (!userName || !userAddress) {
      alert('Please enter your name and address.');
      return;
    }

    try {
      // Send user name, address, and product ID to the backend
      const response = await axios.post('http://localhost:2006/purchase', {
        productId,
        userName,
        userAddress
      });

      // Handle successful purchase (e.g., display success message)
      console.log('Purchase successful:', response.data);
      alert("BuySuccifully")
    } catch (error) {
      console.error('Error purchasing product:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <section className="bg-light">
      <Container className="text-center">
        <h2>Buy Any Product According To Our Need</h2>
        <br></br>
        <hr></hr>
        <Row xs={1} md={3} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imageURL} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body style={{ height: '200px', overflowY: 'auto' }}>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Price: {product.price}
                    <br />
                    Brand: {product.brand}
                    <br />
                    Description: {product.description}
                  </Card.Text>
                  <Form.Group controlId="formUserName">
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <br></br>
                  </Form.Group>
                  <Form.Group controlId="formUserAddress">
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      value={userAddress}
                      onChange={(e) => setUserAddress(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={() => handleBuyClick(product.id)}>Buy</Button>
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
