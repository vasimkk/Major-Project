import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5">Feel Free To Contact Us</h2>
        <hr></hr>
       <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
         <Row className="mt-6 justify-content-center">
          <Col md={6}>
            <Form action="https://formspree.io/f/mqkrgepk" method="POST">
              <Form.Group controlId="formBasicUsername">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  required
                />
                <br></br>
              </Form.Group>
             <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
                <br></br>
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  autoComplete="off"
                  required
                />
                <br></br>
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </section>
  );
};

export default Contact;
