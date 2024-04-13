import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';

function AllProducts() {
  const [products, setProducts] = useState([]);

  // State to store name and address for each product
  const [productDetails, setProductDetails] = useState({});

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
    const { userName, userAddress } = productDetails[productId] || {};

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
      alert("BuySuccifully");
    } catch (error) {
      console.error('Error purchasing product:', error);
      // Handle error (e.g., display error message)
    }
  };

  const handleInputChange = (productId, fieldName, value) => {
    setProductDetails(prevState => ({
      ...prevState,
      [productId]: {
        ...prevState[productId],
        [fieldName]: value
      }
    }));
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
                  <Form.Group controlId={`formUserName${product.id}`}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={productDetails[product.id]?.userName || ''}
                      onChange={(e) => handleInputChange(product.id, 'userName', e.target.value)}
                    />
                    <br></br>
                  </Form.Group>
                  <Form.Group controlId={`formUserAddress${product.id}`}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      value={productDetails[product.id]?.userAddress || ''}
                      onChange={(e) => handleInputChange(product.id, 'userAddress', e.target.value)}
                    />
                  </Form.Group>
                  <br></br>
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
