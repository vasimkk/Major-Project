import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>About Us</h5>
              <p>Welcome to our second-hand marketplace!</p>
            </Col>
            <Col md={3}>
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <p>Email: Kkvasim417gmail.com</p>
              <p>Phone: 9630179288</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;
  