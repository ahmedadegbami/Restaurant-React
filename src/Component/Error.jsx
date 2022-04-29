import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Card>
            <Card.Img
              variant="top"
              src="https://api.time.com/wp-content/uploads/2015/05/404-errors12.jpg"
            />
            <Card.Body>
              <Card.Title>ERROR 404! YOU ARE LOST!!!</Card.Title>
              <Card.Text>
                The page you are looking for doesn't exist. Please go back to
                the homepage
              </Card.Text>
              <Link to="/">
                <Button variant="primary">Fly Back 🚀 🚀 🚀 </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
