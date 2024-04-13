import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServiceSection = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <hr></hr>
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/select-focus-one-hand-child-260nw-1849786810.jpg" alt="Service 1"style={{ height: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Buying Second-Hand Products</Card.Title>
                <Card.Text>
                One of the primary reasons people opt for second-hand products is the cost savings. Second-hand items are often significantly cheaper than their brand-new counterparts, allowing consumers to save money while still acquiring quality goods.
               </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://media.product.which.co.uk/prod/images/1500_750/gm-9a168719-8dc0-45cc-8713-4a0aed48a6d3-selling-second-hand-2.jpg" alt="Service 2"style={{ height: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Selling Second-Hand Products</Card.Title>
                <Card.Text>
                Selling second-hand products allows individuals to declutter their homes while making some extra money in the process. Items that are no longer needed or used can find new homes with buyers who are looking for affordable options.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
