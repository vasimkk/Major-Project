import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroSection() {
  return (
    <section className="bg-light">
    <Container>
      <Row>
        <Col>
          <div>
            <h1>THRIFT STORE</h1>
            <br></br>
            <h5>This is the Buying and Selling second hand product platform.</h5>
            {/* Add button with Link to contact page */}
            <Link to="/contact">
              <button className="btn btn-primary mt-3">More Infomation</button>
            </Link>
          </div>
        </Col>
        <Col>
          <div>
            <img src='https://i0.wp.com/goldwilldigger.com/wp-content/uploads/2017/09/style-sneakers.jpg?ssl=1' height="350px" width="500px" alt="Thrift Store Image"/>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default HeroSection;
