
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroSection() {
  return (
    <Container>
      <Row>
        <Col>
        <div>
          <h1>Thrift Stores</h1>
          <br></br>
          <h3>Welcome To our website</h3>
        </div>
        </Col>
        <Col>
        <div>
          <img src='https://i0.wp.com/goldwilldigger.com/wp-content/uploads/2017/09/style-sneakers.jpg?ssl=1'height="350px" width="500px"/>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;