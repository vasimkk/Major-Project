import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    quantity: '',
    price: '',
    images: [], // Store the URLs of images here
    sellerName: '',
    sellerEmail: '',
    shippingAddress: ''
  });
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = Array.from(files).map((file) => URL.createObjectURL(file)); // Store URLs directly
    setFormData({ ...formData, images: imageArray });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAuthenticated) {
        return alert('Please login to add a product.');
      }
      const token = await getAccessTokenSilently();
      
      // Create the JSON object to send to the backend
      const productData = {
        productName: formData.productName,
        description: formData.description,
        quantity: formData.quantity,
        price: formData.price,
        images: formData.images, // Include URLs directly
        sellerName: formData.sellerName,
        sellerEmail: formData.sellerEmail,
        shippingAddress: formData.shippingAddress
      };
      
      const response = await axios.post('http://localhost:2006/products', productData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Product added successfully:', response.data);
      alert('Product added successfully!');
      
      setFormData({
        productName: '',
        description: '',
        quantity: '',
        price: '',
        images: [],
        sellerName: '',
        sellerEmail: '',
        shippingAddress: ''
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
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" name="price" value={formData.price} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="images">
              <Form.Label>Images</Form.Label>
              <Form.Control type="file" multiple name="images" onChange={handleImageChange} />
            </Form.Group>
            <Form.Group controlId="sellerName">
              <Form.Label>Seller Name</Form.Label>
              <Form.Control type="text" placeholder="Enter seller name" name="sellerName" value={formData.sellerName} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="sellerEmail">
              <Form.Label>Seller Email</Form.Label>
              <Form.Control type="email" placeholder="Enter seller email" name="sellerEmail" value={formData.sellerEmail} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="shippingAddress">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" placeholder="Enter shipping address" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;