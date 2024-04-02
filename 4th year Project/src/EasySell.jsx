import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    price: '',
    brand: '',
    address: ''
  });
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAuthenticated) {
        // Redirect user to login if not authenticated
        return alert('Please login to add a product.');
      }
      // Get access token
      const token = await getAccessTokenSilently();
      // Send form data to backend API with the access token
      const response = await axios.post('http://localhost:2003/products', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Handle response
      console.log('Product added successfully:', response.data);
      alert('Product Sell successfully!');

      // Reset form fields
      setFormData({
        productName: '',
        quantity: '',
        price: '',
        brand: '',
        address: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };
   return (
    <Container>
      <Row>
        <Col>
          <h3>Sell Product</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" name="productName" value={formData.productName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" name="price" value={formData.price} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" placeholder="Enter brand" name="brand" value={formData.brand} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
